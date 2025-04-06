import { Link, useLocation } from "react-router";

export default function MovieList({ movies }) {
    const location = useLocation();
   return (
     <div>
       <ul>
         {movies.map((movie) => (
           <li key={movie.id}>
             <Link to={`/movies/${movie.id}`} state={location}>
               {movie.title}
             </Link>
           </li>
         ))}
       </ul>
     </div>
   );
}
