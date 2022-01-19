import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { createContext, useContext, useState } from "react";
import ConvertDataToImg from "../utils/ConvertDataToImg";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
    const { auth, ToggleAuth } = useContext(AuthContext);

    const [user, setUser] = useState(
        localStorage.getItem("token") && localStorage.getItem("token").includes(".") ? {
            user: {
                username: jwtDecode(localStorage.getItem("token")).sub,
                avatarSrc: localStorage.getItem("avatarSrc"),
            }
        } : null
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

        setUser({
            user: {
                username: jwtDecode(token).sub,
                // Every user will either have a custom or default profile picture
                avatarSrc: localStorage.getItem("avatarSrc"),
            }
        })

        ToggleAuth(true);

    }

    function logout() {
        console.log("user is logged out");
        localStorage.clear();
        setUser(null);
        ToggleAuth(false);

    }

    const contextData = {
        user: user,
        login: login,
        logout: logout,
    };

    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )
}
