# 📓 Notebook Aesthetic Starter Template

A beginner-friendly, clean, and aesthetically pleasing starter template with your custom red color scheme!

## 🚀 Quick Start

1. Run your dev server: `npm run dev`
2. Visit: `http://localhost:5173/starter`

## 📁 File Structure

```
src/starter/
├── NotebookStarter.jsx   ← Main component + reusable sub-components
├── NotebookStarter.css   ← All styles (organized with comments!)
└── README.md             ← You are here!
```

## 🎨 How to Customize

### Change Colors
Open `NotebookStarter.css` and edit the CSS variables at the top:

```css
:root {
  --notebook-dark: #220B0D;      /* Darkest red */
  --notebook-medium-dark: #45171C;
  --notebook-medium: #6A232B;    /* Main accent color */
  --notebook-light: #8F2F3A;     /* Lightest red */
  --notebook-cream: #FDF8F3;     /* Background */
  /* ... more colors */
}
```

### Change Text Content
Open `NotebookStarter.jsx` and edit the `CONTENT` object:

```jsx
const CONTENT = {
  header: {
    title: "Your Title Here",
    subtitle: "Your subtitle ✨",
  },
  // ... edit cards, about section, footer, etc.
}
```

### Add More Cards
Just add to the cards array:

```jsx
cards: [
  { emoji: "🎮", title: "Gaming", description: "My favorite games" },
  { emoji: "🎵", title: "Music", description: "What I listen to" },
  // Add more!
]
```

## 🧩 Reusable Components

Import and use these anywhere in your project:

```jsx
import { 
  NotebookCard, 
  NotebookDivider, 
  NotebookButton, 
  NotebookTag 
} from './starter/NotebookStarter'

// Usage examples:
<NotebookCard emoji="🌟" title="Hello" description="World" />
<NotebookDivider style="dashed" /> {/* or "solid" or "dotted" */}
<NotebookButton variant="primary">Click Me</NotebookButton>
<NotebookTag>Label</NotebookTag>
```

## 🎯 Beginner Tips

1. **Start Small**: Change one thing at a time and see what happens
2. **Use DevTools**: Right-click → Inspect to see how CSS affects elements
3. **Copy Sections**: Like a card? Copy the whole section to create more
4. **Color Picker**: Use VS Code's color picker on hover to try new colors
5. **Comment Out**: Don't delete code you might want back - comment it out!

## 📱 Already Responsive!

The template is mobile-friendly out of the box. Resize your browser to see it adapt!

## ❓ Common Customizations

| Want to... | Edit this... |
|------------|--------------|
| Change main color | `--notebook-medium` in CSS |
| Add new section | Copy a `<section>` block in JSX |
| Remove notebook lines | Delete `.notebook-lines` div |
| Change fonts | Edit `font-family` in CSS typography section |
| Add more pages | Copy NotebookStarter and modify! |

---

Happy coding! 💖
