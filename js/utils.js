export const getStorage = (item) => {
  return JSON.parse(localStorage.getItem(item));
};

export const setStorage = (item, value) => {
  localStorage.setItem(item, JSON.stringify(value));
};

export const generateID = () => {
  return Math.floor(Math.random() * 5000);
};
