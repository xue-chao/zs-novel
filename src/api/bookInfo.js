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
  }
};
