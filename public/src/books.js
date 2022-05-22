function findAuthorById(authors, id) {
let authorSearch = [];
for(let auth in authors){
  let lookUpAuth = authors[auth];
  if (lookUpAuth.id === id){
    authorSearch = lookUpAuth;
  }}
return authorSearch;
}

function findBookById(books, id) {
  return books.find((book)=>book.id===id)
}

function partitionBooksByBorrowedStatus(books) {
  let returned = [];
  let borrowed = [];
  for(let book of books){
    if(book.borrows[0].returned){
      returned.push(book);
    }else{
      borrowed.push(book);
    }}
  return [borrowed, returned];
}

//helperfunction
  function _findAccountById(accounts, id) {
    return accounts.find((account) => account.id === id)
  }

function getBorrowersForBook(book, accounts) {
  const transactions = book.borrows
  const result = transactions.map((transaction)=>{
  const accountInfo = _findAccountById(accounts, transaction.id)
  const newTransaction = {
          ...transaction,
          ...accountInfo
        }
        return newTransaction
      })
  result.splice(10)
  return result;
    }


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
