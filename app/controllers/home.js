const express = require('express'),
  router = express.Router();
const categories = require('../models/categories');
const articles = require('../models/articles');

const BASE_TITLE = 'Coingi.com knowledge base';

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  res.render('index', {
    title: BASE_TITLE,
    pageName: 'landing',
  });
});

router.get('/article/:id', (req, res, next) => {
  const articleId = req.params.id;
  if (articles.hasOwnProperty(articleId)) {
    const selectedArticle = articles[articleId];

    res.render('article', {
      title: `Article title | ${BASE_TITLE}`,
      pageName: 'article',
      selectedArticle,
    });
  } else {
    next();
  }
});

router.get('/category/:id', (req, res, next) => {
  const categoryId = req.params.id;
  if (categories.hasOwnProperty(categoryId)) {
    const selectedCategory = categories[categoryId];

    res.render('category', {
      title: `${selectedCategory.name} | ${BASE_TITLE}`,
      pageName: 'category',
      selectedCategoryId: categoryId,
      selectedCategory,
    });
  } else {
    next();
  }
});
