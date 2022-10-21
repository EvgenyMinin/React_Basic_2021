import axios from 'axios';

const url = 'http://localhost:5000/status';

export const getStatus = () => axios.get(url);
