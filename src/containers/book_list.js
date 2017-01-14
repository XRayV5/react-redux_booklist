import React, {Component} from 'react'

import { connect } from 'react-redux'

import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'
class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'
          onClick={ () => this.props.selectBook(book)}
        >{ book.title }</li>
      )
    })
  }

  render () {
    return (
      <ul className='list-group col-sm-4'>
        { this.renderList() }
      </ul>
    )
  }
}

// take the application state as an argument and map it to a prop
// whatever is returned will show up as props inside of BookList
function mapStateToProps( state ) {
  return {
    books: state.books
  }
}




// take the application state as an argument and map it to a prop
// whatever is returned will show up as props inside of BookList
function mapDispatchToProps(dispatch) {
  //whenever the selectBook is called, the result should be passed to all of the reducers
  return bindActionCreators( { selectBook: selectBook }, dispatch )
}

// promote BookList
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
