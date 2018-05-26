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

router.get('/category', (req, res, next) => {
  res.render('category', {
    title: 'Category',
    pageName: 'category'
  });
});
