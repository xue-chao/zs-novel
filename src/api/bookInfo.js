import axios from 'common/js/axios';
import Store from 'common/js/store';

export default {
  info (_id) {
    return axios.get('/book-info/' + _id).then((res) => {
      return res.data;
    });
  },
  refreshBook () {
    let books = Store.getShelf();
    for (let book of books) {
      this.info(book['_id']).then((data) => {
        Store.addShelf(data.data);
      });
    }
  },
  sources (_id) {
    return axios.get('/book-sources', {
      params: {
        view: 'summary',
        book: _id
      }
    }).then((res) => {
      return res.data;
    });
  },
  chapters (_id) {
    // 书源ID
    return axios.get('/book-chapters/' + _id).then((res) => {
      return res.data;
    });
  },
  getContent (url) {
    url = encodeURIComponent(url);
    return axios.get('/chapters/' + url).then((res) => {
      return res.data;
    });
  }
};
