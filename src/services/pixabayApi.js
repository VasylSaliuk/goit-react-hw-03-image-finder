import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';

function fetchImages({ query = '', currentPage = 1 }) {
  return axios.get(`${baseURL}?q=${query}&page=${currentPage}&key=19999371-811acb2fbb8c6314c2455af9d&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
};

export { fetchImages };