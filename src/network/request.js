import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL:'https://api.imjad.cn/cloudmusic',
    timeout:5000
  });
  return instance(config);
}