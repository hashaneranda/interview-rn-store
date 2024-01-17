import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export const getAllProducts = () => {
  return instance
    .get('/products')
    .then(res => res.data)
    .catch(err => err.message);
};
