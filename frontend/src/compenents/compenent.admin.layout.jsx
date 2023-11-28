import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "./addLayout.css";
export function AdminLayout(){

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <NavLink >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={"nav-link"} to={"/products"}>Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={"nav-link"}>Contacts </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={"nav-link"}>Connexion </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}