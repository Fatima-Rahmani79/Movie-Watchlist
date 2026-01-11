import movieIcon from '../assets/movie.png';

export default function MovieItem({ movie, onToggle, onDelete }) {
  return (
    <li className="item">
      <div className="movieTitle">
        
        <p><img className='icon' src={movieIcon} alt="Movie Icon" /> {movie.movieName}</p>
      </div>

      <div className="movieDetails">
        <span>{movie.genre}</span>
        <span className={movie.isWatched ? "watched" : "unwatched"}>
          {movie.isWatched ? "Watched" : "Unwatched"}
        </span>
      </div>

      <div className="movieBtns">
        <button
          className={`btn ${movie.isWatched ? "unwatched" : "watched"}`}
          onClick={() => onToggle(movie.id)}
        >
          {movie.isWatched ? "Mark Unwatched" : "Mark Watched"}
        </button>

        <button className='btn delete' onClick={() => onDelete(movie.id)}>Delete</button>
      </div>
    </li>
  );
}
