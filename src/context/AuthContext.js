import React, { createContext, useState } from 'react';
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [auth, ToggleAuth] = useState(localStorage.getItem("token") ? true : false)


    const contextData = {
        auth: auth,
        ToggleAuth: ToggleAuth,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
