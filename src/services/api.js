import axios from 'axios'

const BASE_URL = 'http://jsonplaceholder.typicode.com'

export default axios.create({ baseURL: BASE_URL })
