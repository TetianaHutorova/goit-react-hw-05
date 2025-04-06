import { Suspense, useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router";
import { fetchMovieById } from "../userService";
import MovieInfo from "../components/MovieInfo/MovieInfo";
 
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    async function getUser() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getUser();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>

      {isLoading && <b>Loading...</b>}
      {error && <b>Error loading data. Please try again.</b>}
      {movie && <MovieInfo movie={movie} />}
      <div className="addInfo">
        {" "}
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading cast or reviews</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
