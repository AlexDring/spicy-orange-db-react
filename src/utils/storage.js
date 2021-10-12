const storageKey = 'SPODbToken'

const saveToken = (token) =>
  localStorage.setItem(storageKey, JSON.stringify(token))

const getToken = () =>
  JSON.parse(localStorage.getItem(storageKey))

const logoutUser = () =>
  localStorage.removeItem(storageKey)

export default {
  saveToken,
  getToken,
  logoutUser
}