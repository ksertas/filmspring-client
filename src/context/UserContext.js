import jwtDecode from "jwt-decode";
import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {

    const [auth, toggleAuth] = useState(
        localStorage.getItem("token") ? {
            user: {
                username: jwtDecode(localStorage.getItem("token")).sub,
            },
            isAuth: true,
        } : {}
    )

    function login(token) {
        localStorage.setItem("token", token);

        toggleAuth({
            ...auth,
            user: {
                username: jwtDecode(token).sub,
            },
            isAuth: true
        })

    }

    function logout() {
        console.log("user is logged out");
        localStorage.clear();

        toggleAuth({
            ...auth,
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
