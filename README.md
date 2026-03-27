# Love Site - Birthday Website for Nalini

A romantic birthday website built with React, Vite, Tailwind CSS & Framer Motion.

---

## Asset Guide — What Files to Place Where

### Photos (`public/images/`)

| File Name    | Purpose                          |
|-------------|----------------------------------|
| `img1.jpg`  | Gallery photo 1                  |
| `img2.jpg`  | Gallery photo 2                  |
| `img3.jpg`  | Gallery photo 3                  |
| `img4.jpg`  | Gallery photo 4                  |
| `img5.jpg`  | Gallery photo 5                  |
| `img6.jpg`  | Gallery photo 6                  |
| `dress.jpg` | Surprise gift reveal image       |

> Use `.jpg`, `.jpeg`, or `.png` — keep file sizes under 1MB each for fast loading.

---

### Video (`public/videos/`)

| File Name          | Purpose                              |
|-------------------|--------------------------------------|
| `our-video.mp4`   | Video displayed in "Our Moments" section |
| `video-poster.jpg`| *(Optional)* Thumbnail before video plays |

> Keep video under 100MB (Vercel limit). Compress using HandBrake or similar tool.

---

### Music (`public/music/`)

| File Name    | Purpose                         |
|-------------|----------------------------------|
| `music.mp3` | Background music (play/pause button at bottom-right) |

> Use a romantic song. Keep it under 10MB.

---

### Voice Message (`public/voice/`)

| File Name    | Purpose                          |
|-------------|----------------------------------|
| `voice.mp3` | Your personal voice message for her |

> Record using your phone's voice recorder and rename to `voice.mp3`.

---

## Sections on the Site

1. **Cinematic Intro** — "For My Dearest Nalini" with typewriter animation
2. **Countdown Timer** — Live countdown to March 29, 2026
3. **Photo Gallery** — 6 photos in a responsive grid
4. **Video Section** — Your video together
5. **Why I Love You** — 6 romantic reason cards
6. **Our Love Story** — Relationship timeline
7. **Surprise Gift** — Tap to reveal dress image
8. **Secret Message** — Password: `iloveyou` → reveals hidden love letter
9. **Voice Message** — Audio player for your voice
10. **Floating Hearts** — Animated background hearts
11. **Music Control** — Play/pause button (bottom-right corner)

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Build & Deploy

```bash
npm run build       # Creates dist/ folder
vercel              # Deploy to Vercel
```

---

## Folder Structure

```
love-site/
├── public/
│   ├── images/         ← Your photos here
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   ├── img3.jpg
│   │   ├── img4.jpg
│   │   ├── img5.jpg
│   │   ├── img6.jpg
│   │   └── dress.jpg
│   ├── videos/         ← Your video here
│   │   └── our-video.mp4
│   ├── music/          ← Background music
│   │   └── music.mp3
│   └── voice/          ← Voice message
│       └── voice.mp3
├── src/
│   ├── components/
│   │   ├── Intro.jsx
│   │   ├── Countdown.jsx
│   │   ├── Gallery.jsx
│   │   ├── VideoSection.jsx
│   │   ├── LoveReasons.jsx
│   │   ├── Timeline.jsx
│   │   ├── Surprise.jsx
│   │   ├── Secret.jsx
│   │   ├── MusicControl.jsx
│   │   ├── FloatingHearts.jsx
│   │   └── VoiceMessage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

---

Made with ❤️
