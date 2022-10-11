import axios from 'axios';

const API_KEY = '04a8506af1d13c9f78b70db5507b16dc';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('trending/movie/week');
  return data;
};
export const getSearchMovies = async query => {
  const { data } = await instance.get('/search/movie', {
    params: query,
  });
  return data;
};
export const getMoviesbyId = async id => {
  const { data } = instance.get(`/movie/${id}`);
  return data;
};

export const getMoviesCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getMoviesReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
