import { schema } from 'normalizr'

export const author = new schema.Entity('authors', {}, {
  idAttribute: '_id'
})
