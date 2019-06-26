import { fork, all } from 'redux-saga/effects'

import watchArticles from './authors'

export default function * rootSaga () {
  yield all([
    fork(watchArticles)
  ])
}
