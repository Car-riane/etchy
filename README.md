# etchySketch

A browser-based Etch-a-Sketch built with vanilla HTML, CSS, and JavaScript. Hover your mouse over the grid to draw, pick any colour, resize the grid on the fly, and reset whenever you want to start fresh.

## Live Demo

> https://car-riane.github.io/etchy/

---

## Features

- 🎨 **Custom colour picker** — draw in any colour using a native colour input
- 📐 **Resizable grid** — prompt to enter any grid size up to 200×200
- 🔄 **Reset button** — clears the canvas and resets to a 16×16 grid
- 🖱️ **Hover to draw** — cells colour on `mouseenter` for a smooth drawing feel
- ✅ **Input validation** — rejects invalid, zero, or oversized grid sizes with an alert

---

## How to Use

No installation needed:

```bash
git clone https://github.com/Car-riane/etchy.git
cd etchy
open index.html
```

- **Hover** over the grid to draw in the current colour
- Click **Colors** to open the colour picker and choose a new shade
- Click **GRIDS** to enter a new grid size (1–200)
- Click **Reset** to clear the canvas and return to 16×16

---

## Project Structure

```
etchy/
├── index.html   # Layout, buttons, and colour picker
├── style.css    # Grid styling and button design
└── script.js    # Grid generation, drawing logic, event listeners
```

---

## How It Works

`createGrid(size)` dynamically generates `size × size` div elements and appends them to the grid container. Each cell's width and height is calculated as `100 / size` percent so the grid always fills its container regardless of size. A `mouseenter` listener on each cell sets its background colour to whatever `currentColor` is at that moment — so switching the colour picker mid-drawing works instantly with no extra logic needed.

---

## What I Learned

- Dynamically creating and appending DOM elements with JavaScript
- Using CSS percentage-based sizing to make a fluid, scalable grid
- Responding to `mouseenter` events for hover-based drawing
- Syncing a colour picker input to live drawing state with an `input` event listener
- Validating user input from `prompt()` and handling edge cases gracefully

---

## Built With

- HTML5
- CSS3
- Vanilla JavaScript

---

## Future Improvements

- Add a rainbow/random colour mode
- Add click-and-drag drawing instead of hover-only
- Add an eraser tool
- Replace `prompt()` with an inline slider for grid size
- Write Jest tests for grid generation logic
