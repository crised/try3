import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Multiselect from '../Multiselect'
import Loader from 'common/components/Loader'
import {getAllAuthors} from 'api/authors'

export default class AuthorSelect extends Component {
  static propTypes = {
    input: PropTypes.object.isRequired
  }

  state = {
    isLoaded: false,
    authors: null
  }

  loadAuthors () {
    getAllAuthors().then(authors => {
      var authorList = []
      for (var i = 0; i < authors.length; i++) {
        authorList.push(authors[i].firstName + ' ' + authors[i].lastName)
      }
      authors = authorList
      this.setState({
        authors,
        isLoaded: true
      })
    })
  }

  componentWillMount () {
    this.loadAuthors()
  }

  render () {
    // eslint-disable-next-line standard/object-curly-even-spacing
    const {isLoaded, authors} = this.state
    console.log('in AuthorSelect Render', authors)

    if (!isLoaded) {
      return (
        <Loader primary />
      )
    }

    return (
      <Multiselect
        defaultValue={this.props.input.value}
        allowCreate={false}
        data={authors}
        {...this.props} />
    )
  }
}
