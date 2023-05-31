import { textNewNote } from "./index.js";
import { renderNotes, validateTextNote } from "./notes.js";
import { setStorage } from "./utils.js";

export const deleteAllNotes = () => {
  setStorage("notes", []);
  renderNotes();
};

export const createNote = () => {
  validateTextNote(textNewNote.value);
  textNewNote.value = "";
};
