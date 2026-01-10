// import movieIcon from './assets/movie.png';
import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';

function createID () {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function App() {
  const [movie, setMovie] = useState([
    {id: createID(), title: "Forrest Gump"}
  ]);

  function handleAddMovie(data) {
    const newMovie ={
      id: createID(),
      ...data,
    };

    setMovie((prev) => [newMovie, ...prev]);
  }

  return (
    <div className='container'>
      <section className="header">
        <h1>
          {/* <img className='icon' src={movieIcon} alt="Movie Icon" /> */}
          Movie Watchlist
        </h1>
        <p>Track your movie and stay organized</p>
        </section>

        <AddMovie onAddMovie={handleAddMovie} />
    </div>
  )
}

export default App
