function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}


function sortAccountsByLastName(accounts) {
  const sortByLn = accounts.sort((acctA, acctB) => {
    return acctA.name.last < acctB.name.last ? -1 : 1
  })
  return sortByLn;
}

function getTotalNumberOfBorrows(account, books) {
  const customerId = account.id;
  let count = 0;
  for(let book in books){
    const { borrows } = books[book]
    borrows.forEach((element)=>{
      if (element.id === customerId){
        count++
      }
    })
  }
  return count;
}
//helper function
function _getAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id
  let booksOut = [];
  booksOut = books.filter((book)=> {
  return book.borrows.some((borrow)=>borrow.id === accountId && !borrow.returned)
  })
  booksOut = booksOut.map((book)=>{
  const author = _getAuthorById(authors, book.authorId)
  const newBook = {
    ...book,
    author,
  }
  return newBook;
})
return booksOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
