const delet3 = (endpoint) =>
  fetch(`http://localhost:1337/api/${endpoint}`, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    }
  })

export default delet3
