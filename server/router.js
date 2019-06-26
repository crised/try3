function applyRoutes (app) {
  // Articles
  const authors = require('./controllers/authors')
  app.get('/authors', authors.all)
  app.post('/authors', authors.create)
  app.get('/authors/:authorId', authors.show)
  app.put('/authors/:authorId', authors.update)
  app.delete('/authors/:authorId', authors.destroy)

  // Countries
  const countries = require('./controllers/countries')
  app.get('/countries', countries.all)

  // Finish with setting up the articleId param
  app.param('authorId', authors.author)
}

module.exports = applyRoutes
