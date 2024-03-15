const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: process.env.MOVIE_DB_API_KEY,
  orignailImage: (imgPath) => `https://images.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://images.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
