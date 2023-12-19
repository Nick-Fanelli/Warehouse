import { useState } from "react";
import AccountProfile from "../AccountProfile/AccountProfile";
import "./NavBar.css"
import { getAuthUser } from "../../firebase";
import Skeleton from "../Skeleton/Skeleton";

export enum NavBarSelection {

    Dashboard,
    Assets,
    Patrons,
    Admin

}

const NavBar = () => {

    const [navBarSelection, setNavbarSelection] = useState<NavBarSelection>(NavBarSelection.Dashboard);

    const user = getAuthUser();

    return (

        <section id="nav-bar">

            <div className="navigation">
                <ul>
                    <li className={navBarSelection == NavBarSelection.Dashboard ? "selected" : ""} onClick={() => setNavbarSelection(NavBarSelection.Dashboard)}>Dashboard</li>
                    <li className={navBarSelection == NavBarSelection.Assets ? "selected" : ""} onClick={() => setNavbarSelection(NavBarSelection.Assets)}>Assets</li>
                    <li className={navBarSelection == NavBarSelection.Patrons ? "selected" : ""} onClick={() => setNavbarSelection(NavBarSelection.Patrons)}>Patrons</li>
                    <li className={navBarSelection == NavBarSelection.Admin ? "selected" : ""} onClick={() => setNavbarSelection(NavBarSelection.Admin)}>Admin</li>
                </ul>
            </div>

            <div className="identification">
                <h1>{user ? user.googleUser.displayName : <Skeleton />}</h1>
                <AccountProfile />
            </div>

        </section>

    )

}

export default NavBar;