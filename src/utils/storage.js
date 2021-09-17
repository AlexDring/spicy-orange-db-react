const storageKey = 'SPODbToken'

const saveToken = (user) =>
  localStorage.setItem(storageKey, JSON.stringify(user))

const getToken = () =>
  JSON.parse(localStorage.getItem(storageKey))

const logoutUser = () =>
  localStorage.removeItem(storageKey)

export default {
  saveToken,
  getToken,
  logoutUser
}