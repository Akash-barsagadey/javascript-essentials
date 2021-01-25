import axios from 'axios';


const headers = {
  'Content-Type': 'application/json',
};

const baseURL = process.env.REACT_APP_API_URL;

export const request = axios.create({
  baseURL,
  headers,
});

request.interceptors.request.use(
  async (config) => {
    const session = await Auth.currentSession();
    const idToken = session.getIdToken().getJwtToken();
    console.log(`this is request iterceptor ${config}`);
    config.headers.Authorization = `${idToken}`;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// update the response if require and manage the log
request.interceptors.response.use(
  (res) => {
    console.log(`this is response iterceptor ${res}`);
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      try {
        console.log(`this is error  ${error}`);
      } catch (e) {}
    }
    return Promise.reject(error);
  }
);
