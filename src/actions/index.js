export function selectBook(book) {
  console.log('active!')
  // selectBook is Action createor, it needs to return an action
  // an action is an object with a type property
  return {
    type : 'BOOK_SELECTED',
    payload : book
  }
}
