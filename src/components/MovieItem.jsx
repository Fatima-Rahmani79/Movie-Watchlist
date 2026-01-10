export default function MovieItem({ movie, onToggle }) {
  return (
    <li className="item">
      <div className="movieTitle">
        <p>{movie.movieName}</p>
      </div>

      <div className="movieDetails">
        <span>{movie.genre}</span>
        <span className={movie.isWatched ? "watched" : "unwatched"}>
          {movie.isWatched ? "Watched" : "Unwatched"}
        </span>
      </div>

      <div className="movieBtns">
        <button
          className="btn"
          onClick={() => onToggle(movie.id)}
        >
          {movie.isWatched ? "Mark Unwatched" : "Mark Watched"}
        </button>
      </div>
    </li>
  );
}
