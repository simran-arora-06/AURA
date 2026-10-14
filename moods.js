/**
 * ==============================================================================
 * AURA - Mood Data Store (moods.js)
 * ==============================================================================
 * 
 * This file holds all mood board configurations, colors, quotes, and images.
 * There is NO database needed!
 * 
 * HOW TO ADD A NEW MOOD:
 * 1. Copy one of the mood objects below (from '{' to '},').
 * 2. Paste it before the closing brace '};'.
 * 3. Change the key (e.g. 'dreamy', 'romantic', 'angry', 'creative').
 * 4. Update the auraName, quote, colors, keywords, and images!
 * ==============================================================================
 */

const MOODS_DATA = {
  // 1. HAPPY
  happy: {
    auraName: "Solar Radiance Amber",
    tagline: "High Vibrational • Warmth • Joy",
    quote: "You carry a pocket of sunshine wherever the universe takes you.",
    author: "Cosmic Whispers",
    accentColor: "#FBBF24",
    bgGradient: "radial-gradient(circle at 50% 20%, #422006 0%, #1f1203 40%, #050508 100%)",
    glowColor: "rgba(251, 191, 36, 0.45)",
    element: "Solar Fire",
    frequency: "528 Hz (Joy & Miracle)",
    description: "Your aura is radiating vibrant golden hues. You are illuminating rooms, breaking through cloudy skies, and spreading pure, infectious light.",
    keywords: ["Golden Hour", "Sunburst", "Laughter", "Summer Bloom", "Warmth"],
    palette: [
      { name: "Sunlight Gold", hex: "#FBBF24" },
      { name: "Amber Ray", hex: "#F59E0B" },
      { name: "Apricot Glow", hex: "#FB923C" },
      { name: "Honey Nectar", hex: "#FEF08A" },
      { name: "Solar Core", hex: "#EA580C" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
        caption: "Golden Horizon"
      },
      {
        url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80",
        caption: "Yellow Flora"
      },
      {
        url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=700&q=80",
        caption: "Sunlit Canopy"
      },
      {
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80",
        caption: "Warm Sky Dreams"
      }
    ]
  },

  // 2. CALM
  calm: {
    auraName: "Celestial Ocean Azure",
    tagline: "Equilibrium • Still Waters • Gentle Breeze",
    quote: "Quiet the mind, and the soul begins to whisper cosmic truths.",
    author: "Tao of Stillness",
    accentColor: "#38BDF8",
    bgGradient: "radial-gradient(circle at 50% 20%, #082f49 0%, #0c1c2e 40%, #040810 100%)",
    glowColor: "rgba(56, 189, 248, 0.4)",
    element: "Deep Water",
    frequency: "432 Hz (Deep Harmony)",
    description: "A tranquil tide washes over your spirit. Your energy is centered, clear, and soothing to anyone in your gravitational orbit.",
    keywords: ["Tidal Waves", "Morning Mist", "Clean Slate", "Silent Pines", "Stillness"],
    palette: [
      { name: "Cyan Mist", hex: "#38BDF8" },
      { name: "Oceanic Deep", hex: "#0284C7" },
      { name: "Glacier Blue", hex: "#BAE6FD" },
      { name: "Abyssal Navy", hex: "#0C4A6E" },
      { name: "Dewdrop", hex: "#E0F2FE" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=700&q=80",
        caption: "Silent Shoreline"
      },
      {
        url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=700&q=80",
        caption: "Pure Water Ripple"
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=80",
        caption: "Misty Pine Forest"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
        caption: "Serene Waves"
      }
    ]
  },

  // 3. SAD
  sad: {
    auraName: "Indigo Rain Shadow",
    tagline: "Tender Healing • Solitude • Quiet Depths",
    quote: "Stars cannot shine without darkness, and rain prepares the earth to bloom.",
    author: "Ethereal Echo",
    accentColor: "#818CF8",
    bgGradient: "radial-gradient(circle at 50% 20%, #1e1b4b 0%, #111029 40%, #06060c 100%)",
    glowColor: "rgba(129, 140, 248, 0.35)",
    element: "Rain & Dusk",
    frequency: "396 Hz (Release & Cleansing)",
    description: "Your aura holds gentle, deep twilight tones. This is not weakness; it is your soul pausing, recharging, and shedding what no longer serves you.",
    keywords: ["Overcast Window", "Petrichor", "Heavy Rain", "Soft Melancholy", "Solitude"],
    palette: [
      { name: "Indigo Tear", hex: "#818CF8" },
      { name: "Midnight Fog", hex: "#4338CA" },
      { name: "Pale Wistful", hex: "#C7D2FE" },
      { name: "Dull Storm", hex: "#312E81" },
      { name: "Rain Smoke", hex: "#1E1E38" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=700&q=80",
        caption: "Raindrop Glass"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
        caption: "Solitary Path"
      },
      {
        url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=700&q=80",
        caption: "Foggy Mountain"
      },
      {
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80",
        caption: "Dusk Silhouette"
      }
    ]
  },

  // 4. ANXIOUS
  anxious: {
    auraName: "Violet Stardust Nebula",
    tagline: "Restless Spirit • High Alert • Seeking Ground",
    quote: "You don't have to control every wave; just learn how to float.",
    author: "Cosmic Anchor",
    accentColor: "#C084FC",
    bgGradient: "radial-gradient(circle at 50% 20%, #3b0764 0%, #20063b 40%, #07030e 100%)",
    glowColor: "rgba(192, 132, 252, 0.4)",
    element: "Cosmic Wind",
    frequency: "639 Hz (Harmonious Balance)",
    description: "A swirling vortex of purple and electric violet is stirring within. Ground your breath, feel your feet on the earth, and let the storm pass through you.",
    keywords: ["Swirling Mist", "Fast Pulse", "Deep Breath", "Neon Static", "Grounding"],
    palette: [
      { name: "Electric Lilac", hex: "#C084FC" },
      { name: "Deep Violet", hex: "#7E22CE" },
      { name: "Nebula Mist", hex: "#E9D5FF" },
      { name: "Velvet Obsidian", hex: "#581C87" },
      { name: "Quiet Smoke", hex: "#2E1065" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=700&q=80",
        caption: "Night Sky Swirls"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
        caption: "Winding Forest Path"
      },
      {
        url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80",
        caption: "Electric Clouds"
      },
      {
        url: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=700&q=80",
        caption: "Neon Shimmer"
      }
    ]
  },

  // 5. EXCITED
  excited: {
    auraName: "Supernova Neon Coral",
    tagline: "Kinetic Pulse • Sparks • Limitless Momentum",
    quote: "When passion catches fire, the entire universe leans in to watch.",
    author: "Starlight Velocity",
    accentColor: "#F43F5E",
    bgGradient: "radial-gradient(circle at 50% 20%, #4c0519 0%, #29040e 40%, #080204 100%)",
    glowColor: "rgba(244, 63, 94, 0.5)",
    element: "Plasma Flash",
    frequency: "741 Hz (Intuition & Awakening)",
    description: "Sparks are flying from your cosmic fingerprint! You are overflowing with raw electricity, creation power, and untamed anticipation.",
    keywords: ["Neon Glow", "Sparks", "High Voltage", "Heart Thump", "Adrenaline"],
    palette: [
      { name: "Neon Rose", hex: "#F43F5E" },
      { name: "Laser Crimson", hex: "#BE123C" },
      { name: "Sunburst Coral", hex: "#FB7185" },
      { name: "Blaze Pink", hex: "#FDA4AF" },
      { name: "Cosmic Charcoal", hex: "#881337" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80",
        caption: "Neon Lights"
      },
      {
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=80",
        caption: "Celebration Sparks"
      },
      {
        url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=700&q=80",
        caption: "Electric Crowd Beat"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
        caption: "Vivid Sunset Blaze"
      }
    ]
  },

  // 6. TIRED
  tired: {
    auraName: "Moonstone Slate Slumber",
    tagline: "Soft Blanket • Resting Cycle • Cocoon",
    quote: "Even the moon disappears from the night sky to rest and renew herself.",
    author: "Lullaby of the Cosmos",
    accentColor: "#94A3B8",
    bgGradient: "radial-gradient(circle at 50% 20%, #1e293b 0%, #101726 40%, #03060a 100%)",
    glowColor: "rgba(148, 163, 184, 0.35)",
    element: "Lunar Silver",
    frequency: "174 Hz (Deep Healing Sleep)",
    description: "Your batteries are asking for silence. Envelope yourself in soft blankets, dim the lanterns, and allow sleep to restore your sacred light.",
    keywords: ["Fleece Blanket", "Dormant Moon", "Herbal Tea", "Whisper", "Heavy Eyelids"],
    palette: [
      { name: "Slate Moon", hex: "#94A3B8" },
      { name: "Dusk Pewter", hex: "#64748B" },
      { name: "Soft Silk", hex: "#CBD5E1" },
      { name: "Obsidian Night", hex: "#334155" },
      { name: "Velvet Rest", hex: "#1E293B" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&w=700&q=80",
        caption: "Candlelight & Books"
      },
      {
        url: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&w=700&q=80",
        caption: "Crescent Moon"
      },
      {
        url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=700&q=80",
        caption: "Cozy Linen Nook"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
        caption: "Twilight Horizon"
      }
    ]
  },

  // 7. DEFAULT FALLBACK (Shown if typed mood is not recognized)
  default: {
    auraName: "Cosmic Twilight Nebula",
    tagline: "Mysterious • Infinite Horizons • Stardust",
    quote: "In the quiet spaces between the stars, infinite magic waits to be discovered.",
    author: "Oracle of the Void",
    accentColor: "#A78BFA",
    bgGradient: "radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0f1026 40%, #03040a 100%)",
    glowColor: "rgba(167, 139, 250, 0.4)",
    element: "Cosmic Aether",
    frequency: "852 Hz (Awakening Higher Self)",
    description: "You are experiencing a complex, unnamed celestial state. You contain entire galaxies of emotion that cannot simply be tied to a single word.",
    keywords: ["Stardust", "Deep Space", "Aurora", "Uncharted", "Mystery"],
    palette: [
      { name: "Nebula Purple", hex: "#A78BFA" },
      { name: "Galactic Teal", hex: "#2DD4BF" },
      { name: "Supernova Pink", hex: "#F472B6" },
      { name: "Deep Void", hex: "#4C1D95" },
      { name: "Starlight White", hex: "#F5F3FF" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=700&q=80",
        caption: "Cosmic Dust"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
        caption: "Ethereal Path"
      },
      {
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80",
        caption: "Celestial Horizon"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
        caption: "Starlit Twilight"
      }
    ]
  }
};

// Helpful keywords map to intelligently match common words to the main moods
const MOOD_SYNONYMS = {
  // Happy matches
  joyful: "happy",
  joy: "happy",
  cheerful: "happy",
  glad: "happy",
  blessed: "happy",
  delighted: "happy",
  sunny: "happy",
  good: "happy",
  great: "happy",

  // Calm matches
  peaceful: "calm",
  relaxed: "calm",
  chill: "calm",
  serene: "calm",
  tranquil: "calm",
  zen: "calm",
  quiet: "calm",

  // Sad matches
  down: "sad",
  depressed: "sad",
  blue: "sad",
  lonely: "sad",
  unhappy: "sad",
  crying: "sad",
  heartbroken: "sad",
  gloomy: "sad",

  // Anxious matches
  stressed: "anxious",
  nervous: "anxious",
  worried: "anxious",
  overwhelmed: "anxious",
  panicked: "anxious",
  restless: "anxious",
  scared: "anxious",

  // Excited matches
  hyped: "excited",
  thrilled: "excited",
  energetic: "excited",
  pumped: "excited",
  ecstatic: "excited",
  eager: "excited",

  // Tired matches
  exhausted: "tired",
  sleepy: "tired",
  drained: "tired",
  burnout: "tired",
  burned: "tired",
  fatigued: "tired",
  weary: "tired"
};
