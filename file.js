/* eslint-disable no-plusplus */
const cards = document.querySelector(".cards");
const library = [
  {
    // eslint-disable-next-line linebreak-style
    bookName: "Harry Potter",
    pages: 345,
    read: "Yes",
  },
  {
    bookName: "Lord Of The Rings",
    pages: 345,
    read: "No",
  },
];

function Book(title, author, pages, read) {
  // eslint-disable-next-line no-unused-expressions, no-sequences
  (this.author = author),
    (this.title = title),
    (this.pages = pages),
    (this.read = read),
    // eslint-disable-next-line func-names
    (Book.prototype.theHobbit = function () {
      return `${this.title} by ${this.authorauthor}, ${this.pages} pages, ${this.read}`;
    });
}

// card.style.color = 'green'

// card.textContent = library[0].bookName
function addBookToLibrary() {
  for (let i = 0; i < library.length; i++) {
    // eslint-disable-next-line linebreak-style

    const div = document.createElement("div");
    cards.appendChild(div);
    div.classList.add("card");
    div.classList.add(`card${i + 1}`);
    const bookTitle = library[i].bookName;
    const { pages } = library[i];
    const readStatus = library[i].read;
    const firstParagraph = document.createElement("p");
    div.appendChild(firstParagraph);
    firstParagraph.textContent = `Book Title : ${bookTitle}`;
    const secondParagraph = document.createElement("p");
    div.appendChild(secondParagraph);
    secondParagraph.textContent = `Pages : ${pages}`;
    const thirdParagraph = document.createElement("p");
    div.appendChild(thirdParagraph);
    thirdParagraph.textContent = `Read : ${readStatus}`;
    // para1.textContent = `Book Title : ${text}`

    // console.log(library[i])
    // text = library[i].bookName
    // text2 = library[i].pages
    // text3 = library[i].read
    // let para1 = document.createElement('p')
    // cards.appendChild(para1)
    // para1.textContent = `Book Title : ${text}`
    // let para = document.createElement('p')
    // cards.appendChild(para)
    // para.textContent = `Pages : ${text2}`
    // let para2 = document.createElement('p')
    // cards.appendChild(para2)
    // para2.textContent = text3
  }
}

addBookToLibrary();

// const Ajiri = new Book("The Hobbit", "J.R.R Tolkein", "295", "not read");
// const Paul = new Book(
//   "Harry Potter",
//   "J.K Rowlings",
//   "300",
//   "finished reading"
// );
// console.log(Ajiri.theHobbit());
// console.log(Paul.theHobbit());

// for (const prop in Ajiri) {
//   console.log(Ajiri[prop]);
//   //   card.textContent = `${Ajiri[prop]}`
// }
/*
every book read
every book unread
when marked read remove from read and place in unread
*/
