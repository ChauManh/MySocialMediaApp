import axios from 'axios';

const createApi = (fullname, username, email, password) => {
  const URL_API = 'http://localhost:5000/auth/signup';
  const data = {
    fullname,
    username,
    email,
    password,
  };
  return axios.post(URL_API, data);
};

const loginApi = (username, password) => {
  const URL_API = 'http://localhost:5000/auth/signin';
  const data = {
    username,
    password,
  };
  return axios.post(URL_API, data);
};

export { loginApi, createApi };
