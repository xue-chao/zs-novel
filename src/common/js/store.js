export default {
  addShelf (item) {
    let books = window.localStorage.getItem('bookShelf');
    books = books ? JSON.parse(books) : [];
    let flag = true;
    for (let book of books) {
      if (book['_id'] === item['_id']) {
        flag = false;
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
