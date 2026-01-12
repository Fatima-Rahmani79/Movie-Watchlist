import MovieItem from "./MovieItem";

export default function MovieList({ movies, onToggle, onDelete}) {
  return (
    <ul className="list">

      {
      (movies.length === 0 )
      ? 
      <p>No movies found. Add one!</p>
      :
      movies.map(movie => (
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
