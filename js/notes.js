import { changeStatusTask, deleteNote } from "./actions.js";
import { pQtdItens } from "./index.js";
import { generateID, getStorage } from "./utils.js";

export const validateTextNote = (text) => {
  if (text.length > 3) {
    newNote(text);
  } else {
    alert("Digite a sua tarefa");
  }
};

export const newNote = (text) => {
  const note = {
    completed: false,
    text,
    id: generateID(),
  };
  setNotes(note);
};

export const setNotes = (newNote) => {
  const notesStorage = JSON.parse(localStorage.getItem("notes"));
  const allNotes = notesStorage === null ? [] : notesStorage;

  allNotes.unshift(newNote);

  localStorage.setItem("notes", JSON.stringify(allNotes));

  createNotes(allNotes);
};

export const renderNotes = () => {
  const allNotes = JSON.parse(localStorage.getItem("notes"));
  createNotes(allNotes);
};

export const createNotes = (notes) => {
  const list = document.querySelector(".list");
  list.innerHTML = ``;

  notes.forEach((note) => {
    console.log(note);
    const line = document.createElement("li");
    line.classList.add("line");

    const div = document.createElement("div");

    const check = document.createElement("span");
    check.classList.add("icon");
    check.classList.add("circle");
    check.onclick = () => changeStatusTask(note.id);

    const p = document.createElement("p");
    p.textContent = note.text;

    if (note.completed) {
      check.classList.add("checked");
      const iconCheck = document.createElement("img");
      iconCheck.src = "./images/icon-check.svg";
      iconCheck.classList.add("icon");
      iconCheck.classList.add("check");

      check.appendChild(iconCheck);
      p.classList.add("item-completed");
    }

    const btnDelete = document.createElement("span");
    btnDelete.classList.add("btn-delete");
    btnDelete.onclick = () => deleteNote(note.id);

    div.appendChild(check);
    div.appendChild(p);

    line.appendChild(div);
    line.appendChild(btnDelete);

    list.appendChild(line);
  });

  calcQtdNotes();
};

export const calcQtdNotes = () => {
  const notes = getStorage("notes").filter((note) => !note.completed);
  pQtdItens.textContent = notes.length;
};
