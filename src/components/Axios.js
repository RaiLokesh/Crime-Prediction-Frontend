import axios from "axios";

//const backEndUrl = "http://172.16.194.51:8080"
const backEndUrl = "http://127.0.0.1:8000/"

const instance = axios.create({
    baseURL: backEndUrl
})
instance.defaults.headers.common['Content-Type'] = "application/json"

export default instance