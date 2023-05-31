import { textNewNote } from "./index.js";
import { createNotes, renderNotes, validateTextNote } from "./notes.js";
import { getStorage, setStorage } from "./utils.js";

export const deleteAllNotes = () => {
  setStorage("notes", []);
  renderNotes();
};

export const createNote = () => {
  validateTextNote(textNewNote.value);
  textNewNote.value = "";
};

export const deleteNote = (id) => {
  const storage = getStorage("notes");
  const newList = storage.filter((item) => item.id !== id);
  setStorage("notes", newList);
  createNotes(newList);
};
