const express = require('express'),
  router = express.Router();

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Coingi.com\'s knowledge base',
    pageName: 'landing'
  });
});

router.get('/article', (req, res, next) => {
  res.render('article', {
    title: 'Article title | Coingi.com\'s knowledge base',
    pageName: 'article'
  });
});

router.get('/category', (req, res, next) => {
  res.render('category', {
    // TODO: Dynamic title by category id (url param)
    title: 'Trading',
    pageName: 'category'
  });
});
