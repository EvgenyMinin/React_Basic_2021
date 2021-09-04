import axios from 'axios';

export default class PostService {
  static async getAll() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/po43sts'
    );

    return data;
  }
}
