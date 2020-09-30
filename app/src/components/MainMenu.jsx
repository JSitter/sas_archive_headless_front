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
                <button className="dropdown-title">Menu <i className="fas fa-bars"></i></button>
                <div className="dropdown-links right-menu">
                    {getMenuItems(props.menuItems)}
                </div>
            </div> 
            
        </nav>
    );
}
