// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
