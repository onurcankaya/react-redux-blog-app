const BASE_URL = 'http://jsonplaceholder.typicode.com/posts'

export default fetch(BASE_URL)
  .then((response) => response.json())
  .then((json) => console.log(json))
