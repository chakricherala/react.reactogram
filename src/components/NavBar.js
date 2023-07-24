import React from "react";
import './NavBar.css'
import Logo from '../images/logo.PNG'


const NavBar = () => {
    return (
        <div>
            <nav clasName="navbar navbar-light bg-light shadow-sm">
                <div clasName="container-fluid">
                    <a clasName="navbar-brand ms-5">
                        <img alt="logo" src={Logo}  height="45px"/>
                    </a>
                    <form clasName="d-flex">
                        <input clasName="form-control me-2" type="search" placeholder="Search" />
                            <button clasName="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default NavBar