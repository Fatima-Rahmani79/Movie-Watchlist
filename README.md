# 🎬 Movie Watchlist Manager

A simple and clean **Movie Watchlist** application built with **React + Vite**.  
This project is designed as a Week 2 assignment to practice core React concepts such as state management, events, conditional rendering, lists, keys, and derived state.

---

## ✨ Features

- ➕ Add movies with title and genre  
- 👁️ Mark movies as watched / unwatched  
- 🗑️ Delete movies from the list  
- 🔍 Filter movies (All / Watched / Unwatched)  
- 📊 Live summary statistics (Total, Watched, Unwatched)  
- 🎨 Clean UI with responsive layout  

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS (Custom, Responsive)**
- **Git & GitHub**

---

## 🧠 Concepts Practiced

- `useState`
- Event handling (`onClick`, `onChange`)
- Conditional rendering
- Rendering lists with `.map()`
- Using **unique and stable keys**
- **Derived state** (computed values instead of extra state)
- Component-based architecture

---

## 📂 Project Structure

src/
├─ components/
│ ├─ AddMovie.jsx
│ ├─ MovieList.jsx
│ ├─ MovieItem.jsx
│ ├─ FilterControls.jsx
│ ├─ Summary.jsx
│ ├─ TextInput.jsx
│ └─ SelectInput.jsx
│
├─ App.jsx
├─ main.jsx
└─ App.css


---

## 📊 Data Model

Each movie object follows this structure:

```js
{
  id: "unique-id",
  movieName: "Inception",
  genre: "Action",
  isWatched: false
}
Getting Started (Local)

Clone the repository:

git clone https://github.com/Fatima-Rahmani79/Movie-Watchlist.git


Install dependencies:

npm install


Run development server:

npm run dev


Build for production:

npm run build



Make sure to configure the base option in vite.config.js when deploying to GitHub Pages.

🎯 Assignment Notes

No unnecessary state is stored for derived values

Filtering and counts are computed during render

Clean separation of components

Focused on clarity, usability, and maintainability

👩‍💻 Author

Fatima Rahmani
Frontend Developer (React)
