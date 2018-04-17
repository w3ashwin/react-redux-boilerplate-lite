import axios from 'axios';
import ApiError from './ApiError';
import ERRORS from './errorConstants';

// eslint-disable-next-line no-unused-vars
const setupInterceptors = (store) => {
  // Default settings for axios request
  axios.defaults.baseURL = 'https://api.example.com';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.validateStatus = () => true;

  axios.interceptors.request.use(
    config => config
    , error => Promise.reject(error),
  );

  axios.interceptors.response.use((response) => {
    // Process response body
    // use store.dispatch() to dispatch any redux actions
    if (response.status >= 500) {
      throw new ApiError(ERRORS.SERVER_ERROR);
    } else if (response.status === 401) {
      throw new ApiError(ERRORS.UNAUTHORISED_ERROR);
    } else if (response.status === 403) {
      throw new ApiError(ERRORS.FORBIDDEN_ERROR);
    } else if (response.status === 404) {
      throw new ApiError(ERRORS.CLIENT_ERROR);
    } else if (response.status === 200 || response.status === 201 || response.status === 202) {
      return response.data;
    } else {
      throw new ApiError(ERRORS.CLIENT_ERROR);
    }
  }, error => Promise.reject(error));
};

export default setupInterceptors;
