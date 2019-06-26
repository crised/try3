function applyRoutes (app) {
  // Authors
  const authors = require('./controllers/authors')
  app.get('/authors', authors.all)
  app.post('/authors', authors.create)
  app.get('/authors/:authorId', authors.show)
  app.put('/authors/:authorId', authors.update)
  app.delete('/authors/:authorId', authors.destroy)

  // Countries
  const countries = require('./controllers/countries')
  app.get('/countries', countries.all)

  // Articles
  const articles = require('./controllers/articles')
  app.get('/articles', articles.all)
  app.post('/articles', articles.create)
  app.get('/articles/:articleId', articles.show)
  app.put('/articles/:articleId', articles.update)
  app.delete('/articles/:articleId', articles.destroy)

  // Finish with setting up the authorId, articleId param
  app.param('authorId', authors.author)
  app.param('articleId', articles.article)
}

module.exports = applyRoutes
