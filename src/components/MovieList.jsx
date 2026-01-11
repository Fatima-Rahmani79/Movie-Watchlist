import MovieItem from "./MovieItem";

export default function MovieList({ movies, handleToggle, handleDelete}) {
  return (
    <ul className="list">
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
