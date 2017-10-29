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
  }
};
