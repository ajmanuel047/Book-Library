/* eslint-disable no-plusplus */
// eslint-disable-next-line no-unused-vars
const cards = document.querySelector(".cards");
const form = document.querySelector("#forms");
const display = document.querySelector(".display");
const submit = document.querySelector("#submit");
const addBook = document.querySelector(".addbook");
const addBookContainer = document.querySelector("#addBookContainer");
const text = document.querySelector("#text");
const bodyContent = document.querySelector("#body_content");
// eslint-disable-next-line no-unused-vars

addBook.addEventListener("click", () => {
  form.style.visibility = "visible";
  addBook.style.visibility = "hidden";
  addBookContainer.style.display = "none";
});

submit.addEventListener("click", () => {
  const library = [];
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

  const result = Array.from(document.querySelectorAll("#forms input")).reduce(
    (acc, input) => ({ ...acc, [input.id]: input.value }),
    {}
  );

  const bookName = result["book-title"];
  const authorName = result.author;
  const pagesCount = result.pages;
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

  const words = [
    "Awesome",
    "Sweetness",
    "You Rock",
    "Lets Do This",
    "Nice",
    "Well Done",
    "You Are Great",
    "You Got This",
  ];

  const randomNumber = Math.floor(Math.random() * words.length);
  let firstParagraph;
  let secondParagraph;
  let thirdParagraph;
  function displayBook() {
    for (let i = 0; i < library.length; i++) {
      // eslint-disable-next-line linebreak-style
      if (
        library[i].title === "" ||
        library[i].author === "" ||
        library[i].pages === "" ||
        library[i].read === ""
      ) {
        library.splice(i, 1);
      } else {
        div = document.createElement("div");
        cards.appendChild(div);
        div.classList.add("card");
        div.classList.add(`card${i + 1}`);
        const bookTitle = library[i].title;
        const { author } = library[i];
        const { pages } = library[i];
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
        thirdParagraph.textContent = `Completed : `;
        deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.style.fontSize = "1rem";
        div.appendChild(deleteButton);
        status = document.createElement("button");
        status.textContent = "Read";
        status.style.height = "32.5px";
        status.style.fontSize = "1rem";
        div.appendChild(status);
        bodyContent.style.display = "none";
        const textPara = document.createElement("h2");
        textPara.textContent = words[randomNumber];
        text.appendChild(textPara);
        form.style.visibility = "hidden";
        cards.style.border = "1px solid orange";
        display.textContent = "";
        setTimeout(() => {
          textPara.remove();
          form.style.visibility = "visible";
        }, 2000);
      }
    }
  }
  displayBook();

  deleteButton.addEventListener("click", () => {
    cards.removeChild(div);
    if (cards.textContent === "") {
      cards.style.removeProperty("border");
      const para = document.createElement("p");
      para.textContent = "Your Books Show Here";
      display.appendChild(para);
      display.style.backgroundColor = "orange";
      display.style.width = "80%";
      display.style.margin = "auto";
      display.style.backgroundColor = "#F7F6EB";
    }
  });

  status.addEventListener("click", () => {
    if (status.textContent === "Read") {
      status.textContent = "UnRead";
      thirdParagraph.textContent = `Completed : Yes`;
    } else {
      status.textContent = "Read";
      thirdParagraph.textContent = `Completed : No`;
    }
  });
});
