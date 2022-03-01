let userLibrary = JSON.parse(localStorage.getItem('Book') || '[]')

const submitNewBookButton = document.getElementById('submitNewBook')
const form = document.getElementById('addBook')
const cardContainer = document.getElementById('container')
const popUpForm = document.getElementById('modalOne')

let title = ''
let author = ''
let isRead = false
let pages = 0
let bookIndex = 0

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

function addBookToLocalStorage() {
  localStorage.setItem('Book', JSON.stringify(userLibrary))
}

function resetFormContent() {
  document.getElementById('addBook').reset()
}

function checkIfInLibrary() {
  let modifiedTitle = title.split(' ').join('').toLowerCase()
  for (let i = 0; i < userLibrary.length; i++) {
    if (
      userLibrary[i].title.split(' ').join('').toLowerCase() == modifiedTitle
    ) {
      return true
    }
    return false
  }
}

submitNewBookButton.addEventListener('click', () => {
  title = form.title.value
  author = form.author.value
  pages = form.pages.value
  isRead = form.isRead.checked
  if (checkIfInLibrary() == true) {
    //book is in library
    popUpForm.style.display = 'none'
    resetFormContent()
    alert(title + ' is already in your library')
  } else {
    addNewBook(title, author, pages, isRead)
    addBookToLocalStorage()
    displayCards()
    addButtonListeners()
    addDeletListeners()
    resetFormContent()
    popUpForm.style.display = 'none'
  }
})

function displayCards() {
  cardContainer.replaceChildren()
  if (userLibrary.length == null) {
    return 0
  } else {
    for (let i = 0; i < userLibrary.length; i++) {
      bookIndex = i
      bookAuthor = userLibrary[i].author
      bookTitle = userLibrary[i].title
      bookPages = userLibrary[i].pages
      if (userLibrary[i].isRead == true) {
        inputClass = 'switch-input-true'
        spanClass = 'switch-label-true'
        handleClass = 'switch-handle-true'
      } else {
        inputClass = 'switch-input'
        spanClass = 'switch-label'
        handleClass = 'switch-handle'
      }

      const cardTemplate = `
      <button class="delete-button"><span class="material-icons">
      clear
      </span></button>
      <div class="title">
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
          <label id="toggleButton" class="switch switch-true" index="${bookIndex}">
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
      let children = cardDiv.children
      let toggleElement = children[4].lastElementChild
      if (userLibrary[i].isRead == true) {
        toggleElement.classList.toggle('switch')
      } else {
        toggleElement.classList.toggle('switch-true')
      }

      cardContainer.appendChild(cardDiv)
      bookIndex++
    }
  }
}

function addButtonListeners() {
  let toggleButtonElements = document.querySelectorAll('#toggleButton')
  let lengthButtonElements = toggleButtonElements.length
  for (let i = 0; i < lengthButtonElements; i++) {
    let toggleButton = toggleButtonElements.item(i)
    toggleButton.addEventListener('change', () => {
      toggleButton.classList.toggle('switch')
      toggleButton.classList.toggle('switch-true')

      if (userLibrary[i].isRead == false) {
        userLibrary[i].isRead = true
        addBookToLocalStorage()
      } else {
        userLibrary[i].isRead = false
        addBookToLocalStorage()
      }
    })
  }
}
addButtonListeners()

function addDeletListeners() {
  let deleteButtonElements = document.querySelectorAll('.delete-button')
  for (let i = 0; i < deleteButtonElements.length; i++) {
    let deleteButton = deleteButtonElements.item(i)
    deleteButton.addEventListener('click', () => {
      let thisBook = userLibrary[i].title
      let confirmation = confirm(
        'Are you sure you want to delete ' +
          thisBook +
          '?\n\nEither OK or Cancel.',
      )
      if (confirmation == true) {
        userLibrary.splice(i, 1)
        addBookToLocalStorage()
        displayCards()
        addButtonListeners()
        addDeletListeners()
      }
    })
  }
}
addDeletListeners()

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
