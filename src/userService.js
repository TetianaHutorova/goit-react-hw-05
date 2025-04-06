import axios from "axios";
const APIKEY = "58ffe7ed099644e9f6613393eb99e05b";
 


export const fetchTrendsMovies = async () => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}&language=en-US`
  );
  return resp.data.results;
};




export const fetchMovieById = async (movieId) => {
     const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=en-US`
  );
     return resp.data;
};


export const fetchMovieCasts = async (movieId) => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKEY}&language=en-US`
  );
  return resp.data.cast;
};

 export const fetchMovieReviews = async (movieId) => {
   const resp = await axios.get(
     `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${APIKEY}&language=en-US`
   );
   return resp.data.results;
 };
 
  export const fetchMovieByQuery = async (query) => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}&language=en-US`
    );
    return resp.data.results;
  };