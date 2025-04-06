import css from "./MovieInfo.module.css";
export default function MovieInfo({ movie }) {
   const { title, genres, overview, poster_path, vote_average, release_date } =
        movie;
   return (
    <div className={css.movieInfo}>
       <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} className={css.img} />
      <div>
        <h2>
          {title} ({new Date(release_date).getFullYear()})
        </h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map((genre) => genre.name).join(" ")}</p>
      </div>
    </div>
  );
}
