import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Tri3st/real-world-vue3',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

export default {
  getEvents() {
    return apiClient.get('/events');
  },
  getEvent(id) {
    return apiClient.get('/events/' + id);
  }
}
