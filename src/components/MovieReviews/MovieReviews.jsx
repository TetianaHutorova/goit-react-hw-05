import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { fetchMovieReviews } from "../../userService";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getCasts() {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    }

    getCasts();
  }, [movieId]);

  console.log(reviews);

  return reviews.length > 0 ? (
    <div>
      <ul className={css.list}>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              <span className={css.span}>Author:</span> {review.author}
            </p>
            <p>{review.content}</p>
          </li>
        ))}{" "}
      </ul>
    </div>
  ) : (
    <p className={css.empty}>We don't have any reviews for this movie.</p>
  );
}
