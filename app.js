/**
 * ==============================================================================
 * AURA — Interactive Application Logic (app.js)
 * ==============================================================================
 * 
 * Handles:
 * 1. Background space glitter & twinkling stars canvas animation.
 * 2. User input detection & mood matching (with synonym fallbacks).
 * 3. Dynamic mood board generation (colors, quotes, images, essence).
 * 4. Clipboard copying & smooth view switching.
 * ==============================================================================
 */

// Wait until DOM is fully loaded before executing
document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const inputView = document.getElementById("input-view");
  const boardView = document.getElementById("board-view");
  const moodForm = document.getElementById("mood-form");
  const moodInput = document.getElementById("mood-input");
  const backBtn = document.getElementById("back-btn");
  const repeatBtn = document.getElementById("repeat-btn");
  const logoBtn = document.getElementById("logo-btn");
  const copySummaryBtn = document.getElementById("copy-summary-btn");
  const ambientGlow = document.getElementById("ambient-glow");
  const toast = document.getElementById("toast");

  // Board Data Display Elements
  const searchedMoodBadge = document.getElementById("searched-mood-badge");
  const auraName = document.getElementById("aura-name");
  const auraTagline = document.getElementById("aura-tagline");
  const auraQuote = document.getElementById("aura-quote");
  const auraAuthor = document.getElementById("aura-author");
  const auraElement = document.getElementById("aura-element");
  const auraFrequency = document.getElementById("aura-frequency");
  const auraDescription = document.getElementById("aura-description");
  const paletteSwatches = document.getElementById("palette-swatches");
  const auraTags = document.getElementById("aura-tags");
  const auraGallery = document.getElementById("aura-gallery");

  // Keep track of currently displayed mood
  let currentActiveMood = null;

  /* ============================================================================
     1. COSMIC SPACE GLITTER & TWINKLING STARS CANVAS
     ============================================================================ */
  const canvas = document.getElementById("space-canvas");
  const ctx = canvas.getContext("2d");

  let stars = [];
  let glitterParticles = [];
  const STAR_COUNT = 140;
  const GLITTER_COUNT = 45;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initCosmicElements();
  }

  function initCosmicElements() {
    stars = [];
    glitterParticles = [];

    // Initialize regular twinkling stars
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1)
      });
    }

    // Initialize shimmering cosmic glitter dust
    for (let i = 0; i < GLITTER_COUNT; i++) {
      glitterParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 1.2,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        hue: Math.random() > 0.5 ? 45 : 260, // warm gold or ethereal purple
        alpha: Math.random() * 0.9 + 0.1,
        sparkleSpeed: Math.random() * 0.03 + 0.01
      });
    }
  }

  function drawCosmicSpace() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Twinkling Stars
    for (let star of stars) {
      star.alpha += star.twinkleSpeed;
      if (star.alpha <= 0.1 || star.alpha >= 0.95) {
        star.twinkleSpeed = -star.twinkleSpeed;
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, star.alpha)})`;
      ctx.shadowBlur = star.radius > 1 ? 6 : 0;
      ctx.shadowColor = "#ffffff";
      ctx.fill();
    }

    // Draw Drifting Glitter & Stardust
    for (let p of glitterParticles) {
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Sparkle pulse
      p.alpha += Math.sin(Date.now() * 0.003 + p.x) * 0.015;
      const clampedAlpha = Math.max(0.1, Math.min(1, p.alpha));

      // Draw Diamond-shaped Glitter Star
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.hue === 45 ? "rgba(251, 191, 36, 0.8)" : "rgba(192, 132, 252, 0.8)";
      ctx.fillStyle = p.hue === 45 ? `rgba(254, 240, 138, ${clampedAlpha})` : `rgba(233, 213, 255, ${clampedAlpha})`;
      
      // Diamond star shape
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.lineTo(p.size * 0.35, 0);
      ctx.lineTo(0, p.size);
      ctx.lineTo(-p.size * 0.35, 0);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }

    requestAnimationFrame(drawCosmicSpace);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  drawCosmicSpace();


  /* ============================================================================
     2. MOOD LOOKUP & MATCHING LOGIC
     ============================================================================ */
  function findMoodData(rawInput) {
    if (!rawInput || typeof rawInput !== "string") {
      return { key: "default", data: MOODS_DATA.default, query: "Cosmic" };
    }

    const cleanInput = rawInput.trim().toLowerCase();

    // 1. Direct match with primary moods (happy, calm, sad, anxious, excited, tired)
    if (MOODS_DATA[cleanInput]) {
      return { key: cleanInput, data: MOODS_DATA[cleanInput], query: cleanInput };
    }

    // 2. Check if cleanInput exists in MOOD_SYNONYMS
    if (MOOD_SYNONYMS[cleanInput]) {
      const mappedKey = MOOD_SYNONYMS[cleanInput];
      if (MOODS_DATA[mappedKey]) {
        return { key: mappedKey, data: MOODS_DATA[mappedKey], query: cleanInput };
      }
    }

    // 3. Check for partial matches (e.g. user typed "feeling happy" or "very tired")
    for (const key of Object.keys(MOODS_DATA)) {
      if (cleanInput.includes(key)) {
        return { key: key, data: MOODS_DATA[key], query: key };
      }
    }

    for (const [synonym, targetMood] of Object.entries(MOOD_SYNONYMS)) {
      if (cleanInput.includes(synonym)) {
        return { key: targetMood, data: MOODS_DATA[targetMood], query: synonym };
      }
    }

    // 4. Fallback default result when typed mood is unrecognized
    return { key: "default", data: MOODS_DATA.default, query: rawInput };
  }


  /* ============================================================================
     3. RENDER MOOD BOARD
     ============================================================================ */
  function renderMoodBoard(moodResult) {
    const { key, data, query } = moodResult;
    currentActiveMood = { ...data, query };

    // Update Searched Tag
    searchedMoodBadge.textContent = query;

    // Set Dynamic CSS Accent Variables
    document.documentElement.style.setProperty("--aura-accent", data.accentColor);
    document.documentElement.style.setProperty("--aura-glow", data.glowColor);

    // Update Body Dynamic Background Gradient
    document.body.style.backgroundImage = data.bgGradient;

    // Update Header & Quote
    auraName.textContent = data.auraName;
    auraName.style.color = data.accentColor;
    auraTagline.textContent = data.tagline;
    auraQuote.textContent = data.quote;
    auraAuthor.textContent = `— ${data.author}`;

    // Update Vibration Matrix Attributes
    auraElement.textContent = data.element;
    auraFrequency.textContent = data.frequency;
    auraDescription.textContent = data.description;

    // 1. Render Color Palette Swatches
    paletteSwatches.innerHTML = "";
    data.palette.forEach(swatch => {
      const item = document.createElement("div");
      item.className = "swatch-item";
      item.title = `Click to copy ${swatch.hex}`;
      item.innerHTML = `
        <div class="swatch-color" style="background-color: ${swatch.hex};"></div>
        <div class="swatch-info">
          <div class="swatch-name">${swatch.name}</div>
          <div class="swatch-hex">${swatch.hex}</div>
        </div>
      `;

      item.addEventListener("click", () => {
        copyToClipboard(swatch.hex, `Copied color ${swatch.hex} to clipboard! ✦`);
      });

      paletteSwatches.appendChild(item);
    });

    // 2. Render Aura Essence Tags
    auraTags.innerHTML = "";
    data.keywords.forEach(tag => {
      const tagChip = document.createElement("span");
      tagChip.className = "aura-tag-chip";
      tagChip.textContent = `#${tag}`;
      auraTags.appendChild(tagChip);
    });

    // 3. Render Aesthetic Mood Board Gallery
    auraGallery.innerHTML = "";
    data.images.forEach(img => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.innerHTML = `
        <img 
          src="${img.url}" 
          alt="${img.caption}" 
          class="gallery-img" 
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=700&q=80'"
        />
        <div class="gallery-overlay">
          <span class="gallery-caption">${img.caption}</span>
        </div>
      `;
      auraGallery.appendChild(galleryItem);
    });

    // Transition to Mood Board View
    inputView.classList.remove("active");
    inputView.classList.add("hidden");

    boardView.classList.remove("hidden");
    boardView.classList.add("active");

    // Smooth scroll to top of board view
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  /* ============================================================================
     4. VIEW SWITCHING & RESET
     ============================================================================ */
  function showInputView() {
    boardView.classList.remove("active");
    boardView.classList.add("hidden");

    inputView.classList.remove("hidden");
    inputView.classList.add("active");

    // Reset standard cosmic background
    document.body.style.backgroundImage = 
      "radial-gradient(ellipse at 50% 0%, #151a33 0%, #080a14 55%, #040508 100%)";
    document.documentElement.style.setProperty("--aura-accent", "#a78bfa");
    document.documentElement.style.setProperty("--aura-glow", "rgba(167, 139, 250, 0.4)");

    // Clear and focus input
    moodInput.value = "";
    setTimeout(() => {
      moodInput.focus();
    }, 150);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  /* ============================================================================
     5. TOAST & CLIPBOARD HELPER
     ============================================================================ */
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  function copyToClipboard(text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage);
      }).catch(() => {
        showToast(`Selected: ${text}`);
      });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        showToast(successMessage);
      } catch (err) {
        showToast(`Selected: ${text}`);
      }
      document.body.removeChild(textArea);
    }
  }


  /* ============================================================================
     6. EVENT LISTENERS
     ============================================================================ */

  // Form submission (User types mood and presses Enter or clicks button)
  moodForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = moodInput.value;
    const moodResult = findMoodData(query);
    renderMoodBoard(moodResult);
  });

  // Quick Mood Chips Click (Happy, Calm, Sad, Anxious, Excited, Tired)
  const chips = document.querySelectorAll(".chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const selectedMood = chip.getAttribute("data-mood");
      moodInput.value = selectedMood;
      const moodResult = findMoodData(selectedMood);
      renderMoodBoard(moodResult);
    });
  });

  // Reset / Return to input
  backBtn.addEventListener("click", showInputView);
  repeatBtn.addEventListener("click", showInputView);
  logoBtn.addEventListener("click", showInputView);

  // Copy Complete Aura Reading Summary
  copySummaryBtn.addEventListener("click", () => {
    if (!currentActiveMood) return;
    const summaryText = `✦ AURA READING ✦\nMood: ${currentActiveMood.query}\nAura Color: ${currentActiveMood.auraName}\nVibe: ${currentActiveMood.tagline}\nQuote: "${currentActiveMood.quote}" ${currentActiveMood.author}\nElement: ${currentActiveMood.element} | Frequency: ${currentActiveMood.frequency}\nColors: ${currentActiveMood.palette.map(p => `${p.name} (${p.hex})`).join(", ")}`;
    
    copyToClipboard(summaryText, "Aura reading copied to clipboard! ✦");
  });

});
