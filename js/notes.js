export const newNote = (text) => {
  const note = {
    completed: false,
    text,
  }

  setNotes(note)
}

export const setNotes = (newNote) => {
  const notesStorage = JSON.parse(localStorage.getItem('notes'))
  const allNotes = notesStorage === null ? [] : notesStorage

  allNotes.unshift({ ...newNote, id: allNotes.length + 1 })

  localStorage.setItem('notes', JSON.stringify(allNotes))

  createNotes(allNotes)
}

export const renderNotes = () => {
  const allNotes = JSON.parse(localStorage.getItem('notes'))
  createNotes(allNotes)
}

export const createNotes = (notes) => {
  const list = document.querySelector('.list')
  list.innerHTML = ``

  notes.forEach((note) => {
    const line = document.createElement('li')
    line.classList.add('line')

    const div = document.createElement('div')

    const check = document.createElement('span')
    check.classList.add('icon')
    check.classList.add('circle')

    const p = document.createElement('p')
    p.textContent = note.text

    const btnDelet = document.createElement('img')
    btnDelet.src = '../images/icon-cross.svg'

    div.appendChild(check)
    div.appendChild(p)

    line.appendChild(div)
    line.appendChild(btnDelet)

    list.appendChild(line)
  })
}
