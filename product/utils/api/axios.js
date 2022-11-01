import axios from 'axios';
import https from 'https';
import http from 'http';

const AXIOS_TIMEOUT = 60 * 1000;
const AGENT_CONFIG = {
  keepAlive: true,
  timeout: 60 * 1000
};
const axiosInstance = axios.create({
  timeout: AXIOS_TIMEOUT,
  httpsAgent: new https.Agent(AGENT_CONFIG),
  httpAgent: new http.Agent(AGENT_CONFIG)
});

axiosInstance.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export default axiosInstance;
