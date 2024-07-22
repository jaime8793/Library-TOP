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
  console.log("This is working");
  openModal();
};

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

let libraryArray = [];

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
  libraryArray.push(newBook);
  console.log(libraryArray);

  displayLibrary();
  modal.classList.remove("show");
};

function displayLibrary() {
  let libraryDiv = document.querySelector(".ag-courses_box");
  libraryDiv.innerHTML = "";
  libraryArray.forEach((kitabu) => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("ag-courses_box");

    let itemDiv = document.createElement("div");
    itemDiv.classList.add("ag-courses_item");

    let link = document.createElement("a");
    link.classList.add("ag-courses-item_link");
    link.href = "#";

    let bgDiv = document.createElement("div");
    bgDiv.classList.add("ag-courses-item_bg");

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("ag-courses-item_title");
    titleDiv.textContent = `${kitabu.title} by ${kitabu.author}, ${kitabu.pages} pages, Read: ${kitabu.read}`;

    let dateBoxDiv = document.createElement("div");
      dateBoxDiv.classList.add("ag-courses-item_date-box");
      let dateNow = new Date();
    dateBoxDiv.innerHTML =
      `Date Added: <span class="ag-courses-item_date">${dateNow}</span>`;

    link.appendChild(bgDiv);
    link.appendChild(titleDiv);
    link.appendChild(dateBoxDiv);
    itemDiv.appendChild(link);
    bookDiv.appendChild(itemDiv);
    libraryDiv.appendChild(bookDiv);
  });
}
