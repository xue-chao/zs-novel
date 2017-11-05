export default {
  addShelf (item) {
    let books = window.localStorage.getItem('bookShelf');
    books = books ? JSON.parse(books) : [];
    let flag = true;
    for (let key in books) {
      if (books[key]['_id'] === item['_id']) {
        flag = false;
        books[key] = item;
      }
    }
    if (flag) {
      books.push(item);
    }
    window.localStorage.setItem('bookShelf', JSON.stringify(books));
  },
  getShelf () {
    let books = window.localStorage.getItem('bookShelf');
    return books ? JSON.parse(books) : [];
  },
  saveSource (_id, data) {
    window.localStorage.setItem(_id, JSON.stringify(data));
  },
  getBook (_id) {
    let book = window.localStorage.getItem(_id);
    return book ? JSON.parse(book) : [];
  },
  getReadIndex (_id) {
    return window.localStorage.getItem(_id + '_index');
  },
  setReadIndex (_id, index) {
    window.localStorage.setItem(_id + '_index', index);
  }
};
