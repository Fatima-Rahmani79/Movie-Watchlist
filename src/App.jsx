// import movieIcon from './assets/movie.png';
import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieSummary from './components/MovieSummary';
import MovieList from './components/MovieList';

function createID () {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function App() {
  const [movies, setMovie] = useState([
    {id: createID(), movieName: "Forrest Gump", genre: "Epic", isWatched: true},
    {id: createID(), movieName: "The Godfather", genre: "Drama", isWatched: false},
    {id: createID(), movieName: "The Dark Knight", genre: "Action", isWatched: false}
  ]);

  function handleAddMovie(data) {
    const newMovie ={
      id: createID(),
      ...data,
    };

    setMovie((prev) => [newMovie, ...prev]);
  };

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

        <MovieSummary title="Movies List">
          <MovieList movies={movies}></MovieList>
        </MovieSummary>
    </div>
  )
}

export default App
