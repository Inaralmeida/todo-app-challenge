import { renderNotes } from './notes.js'
import { setStorage } from './utils.js'

export const deleteAllNotes = () => {
  setStorage('notes', [])

  renderNotes()
}
