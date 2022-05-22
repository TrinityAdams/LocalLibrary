const common = require("mocha/lib/interfaces/common");
const { findBookById } = require("./books");

function getTotalBooksCount(books) {
return books.length;
}
function getTotalAccountsCount(accounts) {
return accounts.length;
}

function getBooksBorrowedCount(books) {
  let totalOut = 0;
  for(let book of books) {
    if(book.borrows[0].returned ===false){
      totalOut++;
    }}
   return totalOut;
}

function getMostCommonGenres(books) {
  const commonGenreCount = books.reduce((acc,book)=> { 
  const genre = book.genre;
acc[genre] ? acc[genre] += 1 : acc[genre] = 1; 
return acc;
 },{})
let topList = Object.keys(commonGenreCount).map((genre)=> {
     return {
       name: genre, 
       count: commonGenreCount[genre],
      }
  })
topList.sort((genreA,genreB) => genreB.count - genreA.count);
return topList.splice(0,5);
}

function getMostPopularBooks(books) {
  const rankedBooks = books.map((book)=>{
   return {
     name: book.title, 
     count: book.borrows.length
      }
   })
   rankedBooks.sort((bookA,bookB) => (bookA.count > bookB.count ? -1 : 1 ))
   return rankedBooks.splice(0,5);
  }

function getMostPopularAuthors(books, authors) {
  const rankedBooks = books.map((book)=>{
  let tempAuthor = ''
    authors.forEach((author)=>{
      if (author.id === book.authorId){
      tempAuthor = `${Object.values(author.name)}`
      tempAuthor = tempAuthor.replace(',',' ')
    }
  })
  return {
      name: tempAuthor,
      count: book.borrows.length,
       } 
    })
  rankedBooks.sort((bookA,bookB) => (bookA.count > bookB.count ? -1 : 1 ))
  return rankedBooks.splice(0,5);
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
