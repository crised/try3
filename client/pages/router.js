import AppLayout from 'common/components/AppLayout'
import AuthorList from 'pages/AuthorList'
import Author from 'pages/Author'

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
    Author(store)
  ]
})
