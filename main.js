let userLibrary = JSON.parse(localStorage.getItem('Book') || '[]')

const submitNewBookButton = document.getElementById('submitNewBook')
const form = document.getElementById('addBook')
const cardContainer = document.getElementById('container')

let title = ''
let author = ''
let isRead = false
let pages = 0

displayCards()

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.addBook = function () {
    userLibrary.push(this)
    localStorage.setItem('Book', JSON.stringify(userLibrary))
  }
}

function addNewBook(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead)
  newBook.addBook()
}

console.log(userLibrary)

submitNewBookButton.addEventListener('click', () => {
  title = form.title.value
  author = form.title.value
  pages = form.title.value
  isRead = form.isRead.checked
  addNewBook(title, author, pages, isRead)
  displayCards()
})

function displayCards() {
  cardContainer.replaceChildren()
  if (userLibrary.length == null) {
    return 0
  } else {
    for (let i = 0; i < userLibrary.length; i++) {
      bookAuthor = userLibrary[i].author
      bookTitle = userLibrary[i].title
      bookPages = userLibrary[i].pages
      if (userLibrary[i].isRead == true) {
        labelClass = 'switch-true'
        inputClass = 'switch-input-true'
        spanClass = 'switch-label-true'
        handleClass = 'switch-handle-true'
      } else {
        labelClass = 'switch'
        inputClass = 'switch-input'
        spanClass = 'switch-label'
        handleClass = 'switch-handle'
      }

      const cardTemplate = `<div class="title">
          ${bookTitle}
        </div>
        <div class="author">
          ${bookAuthor}
        </div>
        <div class="pages">
          ${bookPages}
          <span>pages</span>
        </div>
        <div class="haveYouRead">
          <span>Have you read this book ?</span>
          <label class="${labelClass}">
            <input
              class="${inputClass}"
              type="checkbox"
              name="isRead"
              id="isRead"
            />
            <span class="${spanClass}" data-on="Yes" data-off="No"></span>
            <span class="${handleClass}"></span>
          </label>
        </div>`

      const cardDiv = document.createElement('div')
      // libraryDiv.classList.add('library-card');
      cardDiv.classList.add('card')
      cardDiv.innerHTML = cardTemplate

      cardContainer.appendChild(cardDiv)
    }
  }
}

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
