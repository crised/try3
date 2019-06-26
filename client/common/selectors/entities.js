import { createSelector } from 'reselect'
import { denormalize } from 'normalizr'
import * as schemas from 'schemas'

export const getEntities = (state) => state.entities
export const getAuthors = state => state.entities.get('authors')
export const getIsAuthorsLoaded = state => state.entities.get('isAuthorsLoaded')

export const getAuthor = articleId => createSelector(
  [getAuthors, getEntities],
  (authors, entities) => {
    const author = authors.get('authorId')

    if (!author) {
      return null
    }

    return denormalize(
      author,
      schemas.author,
      entities
    )
  }
)
