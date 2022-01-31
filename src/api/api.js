import axios from 'axios';
let token = window.localStorage.getItem("token");

export const ax = axios.create({
    baseURL: "https://localhost:8080/api",
    timeout: 5000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
})

