import axios from 'axios';

const Satellite = axios.create({
  baseURL: 'https://be-rmy.dev.berijalan.co.id/rest/v1/',
  timeout: 10000, //milisecond
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default Satellite;
