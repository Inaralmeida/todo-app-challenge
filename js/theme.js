export const changeTheme = () => {
  const currentTheme = localStorage.getItem('theme')
  const newTheme = currentTheme === 'dark' ? 'ligth' : 'dark'
  localStorage.setItem('theme', newTheme)
  setTheme(newTheme)
}

export const startTheme = () => {
  const currentTheme = localStorage.getItem('theme')
  setTheme(currentTheme)
}

const setTheme = (theme) => {
  const body = document.body
  body.setAttribute('data-theme', theme)
}
