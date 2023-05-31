import { deleteAllNotes } from "./actions.js";
import { btnDeleteAll, btnNewNote, btnTheme, textNewNote } from "./index.js";
import { calcQtdNotes, renderNotes, validateTextNote } from "./notes.js";
import { changeTheme, startTheme } from "./theme.js";

btnTheme.addEventListener("click", () => changeTheme());
btnDeleteAll.addEventListener("click", () => deleteAllNotes());
btnNewNote.addEventListener("click", () => {
  validateTextNote(textNewNote.value);
  textNewNote.value = "";
});

function startPage() {
  startTheme();
  renderNotes();
  calcQtdNotes();
}

startPage();
