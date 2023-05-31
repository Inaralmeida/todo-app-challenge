import { createNote, deleteAllNotes } from "./actions.js";
import {
  body,
  btnDeleteAll,
  btnNewNote,
  btnTheme,
  textNewNote,
} from "./index.js";
import { calcQtdNotes, renderNotes } from "./notes.js";
import { changeTheme, startTheme } from "./theme.js";

btnTheme.addEventListener("click", changeTheme);
btnDeleteAll.addEventListener("click", deleteAllNotes);
btnNewNote.addEventListener("click", createNote);

function startPage() {
  startTheme();
  renderNotes();
  calcQtdNotes();
}

startPage();

// keyboard interactions
body.addEventListener("keydown", ({ key }) => {
  if (textNewNote.value.length >= 3 && key === "Enter") {
    createNote();
  }
});
