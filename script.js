document.getElementById("myModal").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submission prevented");
});

let addButton = document.getElementById("myBtn");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.classList.remove("show");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
};

// Function to open the modal
function openModal() {
  modal.classList.add("show");
}

addButton.onclick = function () {
  openModal();
};

// Dark & Light toggle
document.querySelector(".day-night input").addEventListener("change", () => {
  document.querySelector("body").classList.add("toggle");
  setTimeout(() => {
    document.querySelector("body").classList.toggle("light");

    setTimeout(
      () => document.querySelector("body").classList.remove("toggle"),
      10
    );
  }, 5);
});

let submitButton = document.querySelector(".feedback-button2");

let titleElement = document.getElementById("titlebook");
let authorElement = document.getElementById("authorname");
let pagesElement = document.getElementById("Pages");
let readElement = document.getElementById("readed");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

submitButton.onclick = function () {
  let titleValue = titleElement.value;
  let authorValue = authorElement.value;
  let pagesValue = pagesElement.value;
  let readValue = readElement.value;

  console.log(
    `title: ${titleValue}, read: ${readValue}, pages: ${pagesValue}, author: ${authorValue}`
  );

  let newBook = new Book(titleValue, authorValue, pagesValue, readValue);
  console.log(newBook);
};
