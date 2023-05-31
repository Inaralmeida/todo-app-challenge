import {
  createNote,
  deleteAllNotes,
  showTasksCompleted,
  showTasksPending,
  showAllTasks,
} from "./actions.js";
import {
  body,
  btnDeleteAll,
  btnNewNote,
  btnShowAll,
  btnShowCompleted,
  btnShowPending,
  btnTheme,
  textNewNote,
} from "./index.js";
import { calcQtdNotes, renderNotes } from "./notes.js";
import { changeTheme, startTheme } from "./theme.js";

btnTheme.addEventListener("click", changeTheme);
btnDeleteAll.addEventListener("click", deleteAllNotes);
btnNewNote.addEventListener("click", createNote);
btnShowCompleted.addEventListener("click", showTasksCompleted);
btnShowPending.addEventListener("click", showTasksPending);
btnShowAll.addEventListener("click", showAllTasks);

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
