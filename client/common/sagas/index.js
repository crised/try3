import { fork, all } from 'redux-saga/effects'

import watchAuthors from './authors'
import watchArticles from './articles'

export default function * rootSaga () {
  yield all([
    fork(watchAuthors),
    fork(watchArticles)
  ])
}
