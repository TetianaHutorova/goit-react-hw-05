 import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { useDebounce } from 'use-debounce';
import MovieList from "../components/MovieList/MovieList";
import { fetchMovieByQuery } from "../userService";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [debouncedQuery] = useDebounce(query, 300);

  const changeSearchText = (event) => {
    const nextParams = new URLSearchParams(searchParams);

    if (event.target.value !== '') {
      nextParams.set('query', event.target.value);
    } else {
      nextParams.delete('query');
    }

    setSearchParams(nextParams);
    };
    
    console.log(movies);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieByQuery(debouncedQuery);
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [debouncedQuery]);

  return (
    <>
      <input type="text" value={query} onChange={changeSearchText} />
      {isLoading && <b>Loading movies...</b>}
      {error && <b>Error loading data. Please try again.</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}