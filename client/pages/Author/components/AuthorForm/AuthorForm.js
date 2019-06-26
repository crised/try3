import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Input, CountrySelect } from 'common/components/FormFields' // TODO Change CountrySelect
import Button from 'common/components/Button'
import FormGroup from 'common/components/FormGroup'
import FormLabel from 'common/components/FormLabel'
import styles from './AuthorForm.scss'

export const FORM_ID = 'author'

export const validate = values => {
  const errors = {}
  const required = [
    'firstName',
    'lastName'
  ]

  required.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  return errors
}

export const AuthorForm = ({
  handleSubmit,
  isEditing,
  firstName,
  onBlur
}) => {
  console.log('author form!', isEditing)
  return (
    <form
      className={styles.component}
      onSubmit={handleSubmit}>
      <h1>
        {isEditing ? `Editing ${firstName}` : `Creating author ${firstName || ''}`}
      </h1>
      <FormGroup>
        <Field
          name='firstName'
          component={Input}
          placeholder='First Name'
          label='First Name' />
      </FormGroup>
      <FormGroup>
        <Field
          name='lastName'
          component={Input}
          placeholder='Last Name'
          label='Last Name' />
      </FormGroup>
      <Button
        primary
        type='submit'>
        {isEditing ? 'Save' : 'Create'} author
      </Button>
    </form>
  )
}

AuthorForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  firstName: PropTypes.string,
  onBlur: PropTypes.func.isRequired
}

export default reduxForm({
  form: FORM_ID,
  validate
})(AuthorForm)
