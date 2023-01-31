import axios from "axios";

//const backEndUrl = "https://red-king-backend.vercel.app/api/"
const backEndUrl = "http://localhost:5000/"

const instance = axios.create({
    baseURL: backEndUrl
})
instance.defaults.headers.common['Content-Type'] = "application/json"

export default instance