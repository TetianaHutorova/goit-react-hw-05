 import { useEffect, useState } from "react";
import { fetchTrendsMovies } from "../userService";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {

  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchTrendsMovies();
        setTrendMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getUser();
  }, []);

  return (
    <div>
      {isLoading && <b>Loading...</b>}
      {error && <b>Error loading data. Please try again.</b>}
      {trendMovies.length>0 && <h1>Trending today</h1>}
      {trendMovies && <MovieList movies={trendMovies} />}
    </div>
  );
}
