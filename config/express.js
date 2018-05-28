const express = require('express');
const glob = require('glob');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const favicon = require('express-favicon');
const categories = require('../app/models/categories');
const articles = require('../app/models/articles');


module.exports = (app, config) => {
  app.locals.ENV = config.env;
  app.locals.ENV_DEVELOPMENT = config.env === 'development';
  app.locals.categories = categories;
  app.locals.getArticleTitleById = id => (articles[id] ? articles[id].title : '');
  app.locals.demoRelatedArticles = function () {
    const articlesArray = Object.entries(articles);
    return [articlesArray[2], articlesArray[1], articlesArray[4], articlesArray[5]];
  }();

  app.set('views', `${config.root}/app/views`);
  app.set('view engine', config.viewEngine);
  app.use(expressLayouts);
  app.set('layout', 'layouts/layout');

  app.use(favicon(config.root + '/dist/img/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(`${config.root}/dist`));
  app.use(methodOverride());

  const controllers = glob.sync(`${config.root}/app/controllers/*.js`);
  controllers.forEach((controller) => {
    require(controller)(app);
  });

  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res, next) => {
    // render the error page
    res.status(err.status || 500);
    res.render('error', {
      title: '404 Page not found',
      pageName: 'error',
      error: req.app.get('env') === 'development' ? err : {},
      message: err.message,
    });
  });

  return app;
};
