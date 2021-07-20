import axios from 'axios'

export default axios.create({
  baseURL:"https://contact-manager-json-server.herokuapp.com"
})