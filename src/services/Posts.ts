import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

export default class JsonPlaceHolderService {
  getPosts() {
    /*
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    */
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
