import axios from 'axios';
let token = window.localStorage.getItem("token");

export const ax = axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 2000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
})

