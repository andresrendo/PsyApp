import { useEffect } from "react";
import { Navigate } from "react-router";
import { HOME_URL } from "../../constants/urls";
import { useUser } from "../../context/UserContext";
import { Cargando } from "../Cargando/Cargando";

export function PrivateRoute({ children }) {
    const { user, isLoading } = useUser();


    if (isLoading) {
        return (<Cargando />)
    }

    if (!isLoading && user === null) {
        alert("No tienes permiso para acceder a esta página");
        return (
            <Navigate to={HOME_URL}/>
        )
    }

    return children;

    
}