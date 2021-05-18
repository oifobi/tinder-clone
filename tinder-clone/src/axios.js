import axios from 'axios'

// eslint-disable-next-line no-unused-vars
const instance = axios.create({
    baseURL: "https://cudtinder.herokuapp.com",

});
export default instance;