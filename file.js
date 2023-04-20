/* eslint-disable no-plusplus */
// eslint-disable-next-line no-unused-vars
const cards = document.querySelector(".cards");
const btn = document.querySelector(".btn");
const form = document.querySelector("#forms");
const display = document.querySelector(".display");
const booktitle = document.querySelector("#book-title");
const submit = document.querySelector("#submit");
const addBook = document.querySelector(".addbook");
const addBookContainer = document.querySelector("#addBookContainer");
const text = document.querySelector("#text");
// eslint-disable-next-line no-unused-vars

addBook.addEventListener("click", function () {
  form.style.visibility = "visible";
  addBook.style.visibility = "hidden";
  addBookContainer.style.display = "none";
});

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
  let deleteButton;
  let status;
  let div;

  let words = [
    "Awesome",
    "Sweetness",
    "You Rock",
    "Lets Do This",
    "Nice",
    "Well Done",
    "You Are Great",
    "You Got This",
  ];

  let randomNumber = Math.floor(Math.random() * words.length);
  let firstParagraph;
  let secondParagraph;
  let thirdParagraph;
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
        firstParagraph = document.createElement("p");
        div.appendChild(firstParagraph);
        firstParagraph.textContent = `Book Title : ${bookTitle}`;
        const authorParagraph = document.createElement("p");
        div.appendChild(authorParagraph);
        authorParagraph.textContent = `Author : ${author}`;
        secondParagraph = document.createElement("p");
        div.appendChild(secondParagraph);
        secondParagraph.textContent = `Pages : ${pages}`;
        thirdParagraph = document.createElement("p");
        div.appendChild(thirdParagraph);
        thirdParagraph.textContent = `Read : `;
        deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.style.fontSize = "1rem";
        div.appendChild(deleteButton);
        status = document.createElement("button");
        status.textContent = "Read";
        status.style.height = "32px";
        status.style.fontSize = "1rem";
        div.appendChild(status);

        const textPara = document.createElement("h2");
        console.log(words[randomNumber]);
        textPara.textContent = words[randomNumber];
        text.appendChild(textPara);
        form.style.visibility = "hidden";

        setTimeout(function testing() {
          textPara.remove();
          form.style.visibility = "visible";
        }, 2000);
      }
    }
  }



    
  
  

  console.log(library);
  displayBook();

  deleteButton.addEventListener("click", function () {
    cards.removeChild(div);
  });

  status.addEventListener("click", function () {
    if (status.textContent == "Read") {
      status.textContent = "UnRead";
      thirdParagraph.textContent = `Read : Yes`;
    } else {
      status.textContent = "Read";
      thirdParagraph.textContent = `Read : No`;
    }
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
just delete the content below textPara
every book read
every book unread
when marked read remove from read and place in unread
when submit is clicked create an array of random excited 
words that would be displayed like "awesome", "sweetness" 
etc
*/
