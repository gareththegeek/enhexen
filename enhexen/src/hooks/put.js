const put = (endpoint, entity) =>
  fetch(`http://localhost:1337/api/${endpoint}`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: entity }),
  })

export default put
