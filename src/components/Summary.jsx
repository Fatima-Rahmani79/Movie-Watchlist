export default function Summary ({total, watched, unwatched}) {
    return (
    <section className="summary">
      <div className="summary-card">
        <h2>{total}</h2>
        <p className="summary-title">Total</p>
      </div>

      <div className="summary-card watched-">
        <h2>{watched}</h2>
        <p className="summary-title">Watched</p>
      </div>

      <div className="summary-card unwatched-">
        <h2>{unwatched}</h2>
        <p className="summary-title">Unwatched</p>
      </div>

      
        {(watched === total && watched > 0) ? <div id="watchMassage"><p>You watched everything!</p></div> : "" }
      
      
    </section>
  );
}