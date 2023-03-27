import axios from 'axios';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
export default class PostService {
  static async getAll(limit = 10, page) {
    const res = await axios.get(POST_URL, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return res;
  }
  static async getPost(id) {
    const res = await axios.get(`${POST_URL}/${id}`);
    return res;
  }
  static async getComments(id) {
    const res = await axios.get(`${POST_URL}/${id}/comments`);
    return res;
  }
}
