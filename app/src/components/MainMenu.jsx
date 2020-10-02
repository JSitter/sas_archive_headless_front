import React from 'react';
import Spinner from './Spinner.jsx';
import LoginMenu from './LoginMenu.jsx';

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
        <div className="dropdown-menu">
            <button className="dropdown-title">Login <i className="fas fa-user-circle"></i></button>
            <div className="dropdown-links">
                <LoginMenu />
            </div>
        </div> 
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
            <LoginMenu />

            <div className="dropdown-menu">
                <button className="dropdown-title">Menu <i className="fas fa-bars"></i></button>
                <div className="dropdown-links right-menu">
                    {getMenuItems(props.menuItems)}
                </div>
            </div> 
            
        </nav>
    );
}
