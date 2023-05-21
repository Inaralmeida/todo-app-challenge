import { deleteAllNotes } from './actions.js'
import { newNote, renderNotes } from './notes.js'
import { changeTheme, startTheme } from './theme.js'

const btnTheme = document.querySelector('#btn-theme')
const btnNewNote = document.querySelector('#btn-new-note')
const textNewNote = document.querySelector('#input-new-note')
const btnDeleteAll = document.querySelector('#btn-delete-all')

btnTheme.addEventListener('click', () => changeTheme())
btnDeleteAll.addEventListener('click', () => deleteAllNotes())

btnNewNote.addEventListener('click', () => {
  if (textNewNote.value.length > 3) {
    newNote(textNewNote.value)
  } else {
    alert('Digite a sua tarefa')
  }
  textNewNote.value = ''
})

function startPage() {
  startTheme()
  renderNotes()
}

startPage()
