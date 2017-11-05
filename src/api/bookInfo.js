import axios from 'common/js/axios';
import Store from 'common/js/store';
import Api from './api';

export default {
  info (_id) {
    return axios.get(Api.book.bookInfo + _id).then((res) => {
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
    return axios.get(Api.book.bookSources, {
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
    return axios.get(Api.book.bookChapters + _id + '?view=chapters').then((res) => {
      return res.data;
    });
  },
  getContent (url) {
    url = encodeURIComponent(url);
    return axios.get(Api.book.chapterContent + url).then((res) => {
      return res.data;
    });
  },
  search (data) {
    return axios.get(Api.book.bookSearch, {
      params: {
        query: data
      }
    });
  }
};
