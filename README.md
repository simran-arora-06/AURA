# Aura ✨

**Unveil your aura today.**

Aura is a mood-based web app. Type how you're feeling (or pick a mood), and Aura reveals your aura: a matching color palette, an aura name, and a short quote that fits your energy. It has a dark, space-inspired look with a glittery starry background and a neon white headline.

🔗 **Live demo:** [https://aura-swart-chi.vercel.app/]

---

## Features

- Dark, cosmic UI with a starry background and a neon white headline
- Type your mood in the input box, or choose from the mood buttons
- Instant result with a background color or gradient, an aura color name, and a quote
- Six supported moods: happy, sad, calm, anxious, excited, tired
- A default result when the typed mood isn't recognized
- No database and no backend, so it loads fast and is simple to run

## How it works

1. The user enters a mood or selects one of the options.
2. The JavaScript looks up that mood in a data file that stores every mood's aura name, colors, and quote.
3. The page updates to show the matching result. If the mood isn't found, a default aura is shown instead.

## Tech stack

- **HTML** for the page structure
- **CSS** for the dark space theme, glow effects, and layout
- **JavaScript** for the mood matching logic and updating the page

No frameworks, no build step, and no database. All mood data lives inside a JavaScript file.

## Project structure

```
Aura/
├── index.html    # Main page with the headline, input box, and mood buttons
├── style.css     # Space theme, neon text, and result styling
├── moods.js      # Mood data: aura names, colors, and quotes
└── app.js        # Logic that reads the input and shows the result
```

> File names may differ slightly in your folder. Adjust this section to match.

## Run it locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/Aura.git
   ```
2. Open the project folder.
3. Double-click `index.html` to open it in your browser. No installation needed.

## Add your own moods

All moods are stored in the data file, so adding one is easy. Copy an existing mood entry, then change its name, aura color name, gradient colors, and quote. The new mood will work as soon as you save the file and refresh the page.

## How this project was built

Aura was built with an AI-assisted workflow, with every step directed through prompts and then tested and refined by me:

- **NotebookLM** for brainstorming the idea and organizing the concept
- **V0 by Vercel** for the initial UI layout, used as a design reference
- **Antigravity** for building the final plain HTML, CSS, and JavaScript version
- **GitHub** for version control and **Vercel** for deployment

## Future ideas

- More moods and more detailed aura types
- A "share your aura" option
- Animated star effects and smoother transitions
- Aura meanings inspired by astrology and numerology

## Author

Made by **Simran**.
