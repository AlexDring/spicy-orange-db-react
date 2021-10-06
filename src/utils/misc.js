const getConfig = (token) => {
  return {
    headers: { Authorization: `bearer ${token}` }
  }
}

export {getConfig}