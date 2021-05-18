import axios from 'axios'

// eslint-disable-next-line no-unused-vars
const instance = axios.create({
    baseURL: "https://tinder-cud.herokuapp.com",

});
export default instance;