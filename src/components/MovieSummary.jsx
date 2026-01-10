export default function MovieSummary ({title, children}) {
    return (
        <section className="Movie-list card">
            <h2 className="title">{title}</h2>
            <div className="movie-item">{children}</div>
        </section>
    )
}