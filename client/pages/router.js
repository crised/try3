import AppLayout from 'common/components/AppLayout'
import AuthorList from 'pages/AuthorList'
import Author from 'pages/Author'
import ArticleList from 'pages/ArticleList'
import Article from 'pages/Article'

import * as Routes from 'constants/Routes'

export default store => ({
  component: AppLayout,
  childRoutes: [
    {
      path: '/',
      indexRoute: {
        onEnter: (nextState, replace) => replace(Routes.AUTHORS)
      }
    },
    AuthorList(store),
    Author(store),
    ArticleList(store),
    Article(store)
  ]
})
