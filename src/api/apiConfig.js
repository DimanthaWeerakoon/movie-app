const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "94fab45dd3495f288c79153c765ba8e7",
  orignailImage: (imgPath) => `https://images.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://images.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
