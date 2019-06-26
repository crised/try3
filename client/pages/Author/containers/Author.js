import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadAuthor, createAuthor, editAuthor } from 'common/actions/authors'
import AuthorForm, { FORM_ID } from '../components/AuthorForm'
import { getAuthor } from 'common/selectors/entities'
import { formValueSelector } from 'redux-form'
import PageLoader from 'common/components/PageLoader'
import { Map } from 'immutable'

class AuthorContainer extends Component {
  static propTypes = {
    loadAuthor: PropTypes.func.isRequired,
    editAuthor: PropTypes.func.isRequired,
    createAuthor: PropTypes.func.isRequired,
    params: PropTypes.object,
    firstName: PropTypes.string,
    isEditing: PropTypes.bool.isRequired,
    author: PropTypes.instanceOf(Map)
  }

  // TODO: should add an componentWillReceiveProps + loadArticle with new ID when route changes to other article
  componentWillMount () {
    const { isEditing, loadAuthor, params } = this.props

    if (isEditing) {
      console.log('is editing', params.id)
      loadAuthor(params.id)
    }
  }

  handleSubmit = data => {
    const {
      isEditing,
      params,
      editAuthor,
      createAuthor
    } = this.props

    if (isEditing) {
      return editAuthor({
        id: params.id,
        data
      })
    }

    createAuthor(data)
  }

  render () {
    console.log('rendering!!', this.props)
    const { isEditing, author, firstName } = this.props
    console.log('rendering2!!', isEditing, author, firstName)


    if (isEditing && !author) {
      return (
        <PageLoader />
      )
    }

    const initialValues = (isEditing && author) ? {
      firstName: author.get('firstName'),
      lastName: author.get('lastName'),
      availableIn: author.get('availableIn').toArray()
    } : {}

    return (
      <AuthorForm
        title={firstName} // TODO: Is 'title' the right label?
        isEditing={isEditing}
        initialValues={initialValues}
        onSubmit={this.handleSubmit} />
    )
  }
}

const valueSelector = formValueSelector(FORM_ID)

const mapStateToProps = (state, ownProps) => {
  const isEditing = !!ownProps.params.id
  console.log('state to props', ownProps.params.id)

  return {
    author: getAuthor(ownProps.params.id)(state),
    isEditing,
    firstName: valueSelector(state, 'firstName')
  }
}

const mapActionsToProps = {
  loadAuthor,
  editAuthor,
  createAuthor
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AuthorContainer)
