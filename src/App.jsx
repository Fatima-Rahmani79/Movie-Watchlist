import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieListCard from './components/MovieListCard.jsx';
import MovieList from './components/MovieList';
import FilterControls from './components/FilterControls.jsx';

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

  const [filter, setFilter] = useState("all");

  const filteredMovies = movies.filter(movie => {
    if (filter === "watched") return movie.isWatched;
    if (filter === "unwatched") return !movie.isWatched;
    return true;
  });

  function handleAddMovie(data) {
    const newMovie ={
      id: createID(),
      ...data,
    };

    setMovie((prev) => [newMovie, ...prev]);
  };

  function handleToggle(id) {
  setMovie(prev =>
    prev.map(movie =>
      movie.id === id
        ? { ...movie, isWatched: !movie.isWatched }
        : movie
      )
    );
  }

  function handleDeleteMovie(id) {
    setMovie((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <div className='container'>
      <section className="header">
        <h1>
          Movie Watchlist
        </h1>
        <p>Track your movie and stay organized</p>
        </section>

        <AddMovie onAddMovie={handleAddMovie} />

        <FilterControls filter={filter} onChangeFilter={setFilter} />

        <MovieListCard title="Movies List">
          <MovieList 
          movies={filteredMovies} 
          onToggle={handleToggle} 
          onDelete={handleDeleteMovie} 
          />
        </MovieListCard>
    </div>
  )
}

export default App
