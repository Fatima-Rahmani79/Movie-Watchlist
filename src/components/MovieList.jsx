import MovieItem from "./MovieItem";

export default function MovieList({ movies, onToggle, onDelete}) {
  return (
    <ul className="list">
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
