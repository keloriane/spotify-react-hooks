import React from 'react';

import logo from "./../../logo.svg";
const Nav = () => {
    return (
        <div className="nav-container">
            <div className="logo-wrapper">
                <img src={logo} alt=""/>
                
            </div>
            <div className="search-wrapper">
                <input type="text"/><i></i>
            </div>
            <div className="nav-wrapper">
                <ul>
                    {/* <li className="nav-items"> <a href="">Home</a> </li>
                    <li className="nav-items"> <a href="#">Albums</a> </li>
                    <li className="nav-items"> <a href="#">Artists</a> </li>
                    <li className="nav-items"> <a href="#">Playlist</a> </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Nav
