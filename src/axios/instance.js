import axios from "axios";

const server = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

export default server;