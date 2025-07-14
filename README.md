# 🎮 Tic Tac Toe - React App

A simple, responsive, and interactive **Tic Tac Toe** game built using **React**. This classic game allows two players to take turns marking `X` and `O` on a 3x3 grid, with automatic win/draw detection and game reset functionality.


---

## 🚀 Features

- 🧠 Player vs Player logic
- 🔄 Real-time turn updates
- ✅ Win and draw detection
- 💡 Game status display (e.g. Player X's Turn, Draw, X Wins!)
- 🔁 Reset game button
- ⚡ Built with modern React using `useState` and functional components
- 📱 Responsive and clean UI

---

## 🛠️ Technologies Used

- ⚛️ React (Vite or CRA)
- 📦 JavaScript (ES6+)
- 🎨 CSS3
- 🖼️ Image Assets for X and O

---

## 📁 Project Structure

```
📦 src
 ┣ 📁 assets
 ┃ ┣ 📄 cross.png
 ┃ ┗ 📄 circle.png
 ┣ 📄 TicTacToe.jsx
 ┣ 📄 TicTacToe.css
 ┗ 📄 main.jsx (or App.jsx depending on setup)
```

---

## ▶️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/tic-tac-toe-react.git
cd tic-tac-toe-react
```

### 2. Install dependencies

If you're using Vite:

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## 🧠 How It Works

- The game board is represented using a 1D array of 9 cells.
- Turns are tracked using a `count` state variable.
- The winner is checked after every move using winning combinations.
- `useState` is used to manage game state reactively.

---

## 🔁 Future Improvements

- [ ] 🎉 Add winning animation
- [ ] 🤖 Add single-player mode with basic AI
- [ ] 🧮 Add score tracking for X and O
- [ ] 🎨 Improve mobile responsiveness and styling

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 💬 Credits

Created by Praanesh  
Inspired by the classic game of Tic Tac Toe.
