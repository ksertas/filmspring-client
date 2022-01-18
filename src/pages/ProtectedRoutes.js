import { Navigate, Outlet } from "react-router-dom";
import IsAuthenticated from "../utils/IsAuthenticated";

export default function ProtectedRoutes() {
    return IsAuthenticated() ?
        <Outlet /> :
        <Navigate to={"/login"} />
}
