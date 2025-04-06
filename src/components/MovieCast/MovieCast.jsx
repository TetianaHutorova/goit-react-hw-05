import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { fetchMovieCasts } from "../../userService";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function getCasts() {
      const data = await fetchMovieCasts(movieId);
      setCasts(data);
    }

    getCasts();
  }, [movieId]);
   return (
    casts.length > 0 && (
      <div>
        <ul className={css.list}>
          {casts.map((cast) => (
            <li key={cast.id} className={css.item}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${cast.profile_path}`
                    : "https://artisan-team.ru/wp-content/uploads/2.1-1.jpg"
                }
                alt={cast.name ? cast.name : "Not found"}
              />
              <p className={css.name}>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

