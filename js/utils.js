export const getStorage = (item) => {
  return JSON.parse(localStorage.getItem(item))
}

export const setStorage = (item, value) => {
  localStorage.setItem(item, JSON.stringify(value))
}
