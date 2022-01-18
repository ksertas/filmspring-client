import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { createContext, useState } from "react";
import ConvertDataToImg from "../utils/ConvertDataToImg";

export const UserContext = createContext({});

export default function UserProvider({ children }) {

    const [auth, toggleAuth] = useState(
        localStorage.getItem("token") ? {
            user: {
                username: jwtDecode(localStorage.getItem("token")).sub,
                avatarSrc: localStorage.getItem("avatarSrc"),
            },
            isAuth: true,
        } : {}
    )

    async function login(token) {
        localStorage.setItem("token", token);

        // gather extra user info with username and put that info in context
        const results = await axios.get(`http://localhost:8080/api/users/${jwtDecode(token).sub}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        localStorage.setItem("avatarSrc", ConvertDataToImg(results.data.avatar).src);

        toggleAuth({
            ...auth,
            user: {
                username: jwtDecode(token).sub,
                // Every user will either have a custom or default profile picture
                avatarSrc: localStorage.getItem("avatarSrc"),
            },
            isAuth: true
        })

    }

    function logout() {
        console.log("user is logged out");
        localStorage.clear();

        toggleAuth({
            ...auth,
            user: {},
            isAuth: false
        })

    }

    const contextData = {
        auth: auth,
        login: login,
        logout: logout,
    };

    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )
}
