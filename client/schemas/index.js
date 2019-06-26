import { schema } from 'normalizr'

export const author = new schema.Entity('authors', {}, {
  idAttribute: '_id'
})

export const article = new schema.Entity('articles', {}, {
  idAttribute: '_id'
})
