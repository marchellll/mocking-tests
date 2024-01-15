import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 10,
  duration: '30s',
};
export default function () {
  http.post('http://host.docker.internal:8080/mtb/MTBOpenBank/serCurrentBalance');
  sleep(1);
}