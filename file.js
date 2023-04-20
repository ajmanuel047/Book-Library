/* eslint-disable no-plusplus */
// eslint-disable-next-line no-unused-vars
const cards = document.querySelector(".cards");
const btn = document.querySelector(".btn");
const form = document.querySelector("#forms");
const display = document.querySelector(".display");
const booktitle = document.querySelector("#book-title");
const submit = document.querySelector("#submit");

// eslint-disable-next-line no-unused-vars

submit.addEventListener("click", function (e) {
  let library = [];
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

  let result = Array.from(document.querySelectorAll("#forms input")).reduce(
    (acc, input) => ({ ...acc, [input.id]: input.value }),
    {}
  );

  let bookName = result["book-title"];

  let authorName = result["author"];
  let pagesCount = result["pages"];
  let readCount = result["read"];
  const Ajiri = new Book(
    `${bookName}`,
    `${authorName}`,
    `${pagesCount}`,
    "Read"
  );
  library.push(Ajiri);
let button;
let div;
  function displayBook() {
    for (let i = 0; i < library.length; i++) {
      // eslint-disable-next-line linebreak-style
      if (
        library[i].title == "" ||
        library[i].author == "" ||
        library[i].pages == "" ||
        library[i].read == ""
      ) {
        console.log(i);
        library.splice(i, 1);
      } else {
         div = document.createElement("div");
        cards.appendChild(div);
        div.classList.add("card");
        div.classList.add(`card${i + 1}`);
        const bookTitle = library[i].title;
        const { author } = library[i];
        const { pages } = library[i];
        const readStatus = library[i].read;
        const firstParagraph = document.createElement("p");
        div.appendChild(firstParagraph);
        firstParagraph.textContent = `Book Title : ${bookTitle}`;
        const authorParagraph = document.createElement("p");
        div.appendChild(authorParagraph);
        authorParagraph.textContent = `Author : ${author}`;
        const secondParagraph = document.createElement("p");
        div.appendChild(secondParagraph);
        secondParagraph.textContent = `Pages : ${pages}`;
        const thirdParagraph = document.createElement("p");
        div.appendChild(thirdParagraph);
        thirdParagraph.textContent = `Read : ${readStatus}`;
        button = document.createElement("button");
        button.textContent = "Remove";
        button.style.fontSize = "1rem";
        div.appendChild(button);
      }
    }
  }

  console.log(library);
  displayBook();
  button.addEventListener("click", function () {
   
    cards.removeChild(div)
  });

  // console.log(library[0].title)
  //  else {
  //   for(let i = 1; i < library.length; i++){
  //     if(library[i].library[i].title == ''){

  //         library.splice(i, 1)
  //         console.log(library[0].title)
  //     }
  //     }
  // }
});

/*
every book read
every book unread
when marked read remove from read and place in unread
when submit is clicked create an array of random excited 
words that would be displayed like "awesome", "sweetness" 
etc
*/
