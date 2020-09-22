import React from 'react';

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
    itemsforEach(element => {
        menuItems.push(menuItem("name", "link"));
    });
}

export default function MainMenu(props) {

    return (
        <section className="main-menu">
            {loginMenu()}
        </section>
    );
}
