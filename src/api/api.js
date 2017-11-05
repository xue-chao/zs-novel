export default {
  category: {
    // 带书籍数量的父分类
    categoryWithBookCount: '/cats/lv2/statistics',
    // 带子分类的父分类
    categoryWithSubCategories: '/cats/lv2',
    // 分类详情: 带着书籍
    categoryInfo: '/book/by-categories'
  },
  book: {
    // 书籍详情
    bookInfo: '/book/', // id 书籍id
    // 相关推荐
    relatedRecommendedBooks: '/book', // /book/56d0b60dfb51235c3a7a2739/recommend
    // 作者名下的书籍
    authorBooks: '/book/accurate-search', // query ?author=忘语
    // 书籍章节内容
    bookChapters: '/atoc/',
    // 书源
    bookSources: '/atoc', // query ?view=summary&book=5779b38d3b433dd647d95da2
    // 章节内容:id 单章id
    chapterContent: '/chapter2/chapter/', // id: chapter id
    // 书籍搜索 可以搜索作者但是不精确
    bookSearch: '/book/fuzzy-search' // query ?query=凡人修仙传
  },
  rank: {
    // 排名分类
    rankCategory: '/ranking/gender',
    // 排名详情
    rankInfo: '/ranking' // id: rank id
  },
  comment: {
    // 讨论
    discussions: '/post/by-book',
    // 短评
    shortReviews: '/post/short-review',
    // 长评
    bookReviews: '/post/review/by-book'
  },
  bookList: {
    lists: '/book-list',
    detail: '/book-list' // bookId
  }
};
