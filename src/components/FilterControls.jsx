export default function FilterControls ({filter, onChangeFilter}) {
    return (
        <section className="filters">
            <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => onChangeFilter('all')}>
                All
            </button>

            <button 
            className={`filter-btn ${filter === 'watched' ? 'active' : ''}`}
            onClick={() => onChangeFilter('watched')}>
                Watched
            </button>

            <button 
            className={`filter-btn ${filter === 'unwatched' ? 'active' : ''}`}
            onClick={() => onChangeFilter('unwatched')}>
                Unwatched
            </button>
        </section>
        
    )
}