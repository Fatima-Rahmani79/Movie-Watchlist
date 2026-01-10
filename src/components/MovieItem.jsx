export default function MovieItem({ movies }) {
  return (
    <li className="item">
      <div>
        <div className="movieTitle">
            <p>{movies.movieName}</p>
        </div>

        <div className="movieDetails">
          <span>{movies.genre}</span>
          <span>
            {movies.isWatched ? (<span className="watched">Watched</span>) :
          (<span className="unwatched">Unwatched</span>)}
          </span>
          
        </div>

        {/* <div className="movieBtns">
            {movies.isWatched} ? <button className="btn Unwatched">Mark Unwatched</button> : <button className="btn watched">Mark Watched</button> 
        </div> */}
      </div>
    </li>
  );
}
