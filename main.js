try {
  let userLibrary = localStorage.getItem(userLibrary)
} catch (err) {
  let userLibrary = []
  localStorage.setItem('Book', userLibrary)
}

const submitNewBookButton = document.getElementById('submitNewBook')
const form = document.getElementById('addBook')
const cardContainer = document.getElementById('container')
const cardTemplate = `<div class="card">
<div class="title">
  ${Book.title}
</div>
<div class="author">
  ${Book.author}
</div>
<div class="pages">
  2000
  <span>pages</span>
</div>
<div class="haveYouRead">
  <span>Have you read this book ?</span>
  <label class="switch">
    <input
      class="switch-input"
      type="checkbox"
      name="isRead"
      id="isRead"
    />
    <span class="switch-label" data-on="Yes" data-off="No"></span>
    <span class="switch-handle"></span>
  </label>
</div>
</div>`

let userLibrary = []
let title = ''
let author = ''
let isRead = false
let pages = 0

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.addBook = function () {
    userLibrary.push(this)
  }
}

function addNewBook(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead)
  newBook.addBook()
}

console.log(userLibrary)

// CODE FOR POP UP FORM START

let modalBtns = [...document.querySelectorAll('.button')]
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute('data-modal')
    document.getElementById(modal).style.display = 'block'
  }
})
let closeBtns = [...document.querySelectorAll('.close')]
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest('.modal')
    modal.style.display = 'none'
  }
})
window.onclick = function (event) {
  if (event.target.className === 'modal') {
    event.target.style.display = 'none'
  }
}

// CODE FOR POP UP FORM END

submitNewBookButton.addEventListener('click', () => {
  title = form.title.value
  author = form.title.value
  pages = form.title.value
  isRead = form.isRead.checked
  addNewBook(title, author, pages, isRead)
})
