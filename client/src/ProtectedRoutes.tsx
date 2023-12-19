import { Navigate, Outlet, Route } from "react-router-dom";
import { PairedUser } from "./firebase";
import { useEffect } from "react";

type Props = {

    user: PairedUser | null,
    element: JSX.Element

}

const UserProtectedRoute = ({ user, element }: Props) => {
    if (user == null) {
        return <Navigate to="/" replace />;
    }

    return element;
};

export default UserProtectedRoute;