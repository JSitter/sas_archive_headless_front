import React from 'react';
import Spinner from './Spinner.jsx';

function menuItem(name, link) {
    return (
        <li>
            <a href={link}>{name}</a>
        </li>
    );
}

function userMenu(loggedIn = False)  {
    return (
        <aside className="user-menu">
            {loggedIn? userLinks(loggedIn) : loginMenu()}
        </aside>
    );
}

function loginMenu() {
    return (
        <ul>
            <li><a href="#">Login</a></li>
        </ul>
    );
}

function userLinks(userName) {
    return (
        <ul>
            <li><a href="#">User Icon</a>{userName}</li>
            <li><a href="#">Favorites</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    );
}

function getMenuItems(items) {
    let menuItems = [];
    if( items ) {
        itemsforEach(element => {
            menuItems.push(menuItem("name", "link"));
        });
    }else {
        return (
            <div className="menu-item menu-loading-spinner">
                <Spinner />
            </div>
        )
    }

}

export default function MainMenu(props) {

    return (
        <nav className="main-menu">
            {loginMenu()}

            <div className="dropdown-menu">
                <div className=".dropdown-title">
                    <i className="fas fa-bars"></i>
                </div>
                <div className="dropdown-content">
                    {getMenuItems(props.menuItems)}
                </div>
                
            </div>

            <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
            </div> 
            
        </nav>
    );
}
