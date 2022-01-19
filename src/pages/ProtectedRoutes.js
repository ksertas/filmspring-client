import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
import IsAuthenticated from "../utils/IsAuthenticated";

export default function ProtectedRoutes() {
    const { auth } = useContext(AuthContext);

    // return IsAuthenticated() ?
    //     <Outlet /> :
    //     <Navigate to={"/login"} />

    return auth ? <Outlet /> : <Navigate to={"/login"} />
}
