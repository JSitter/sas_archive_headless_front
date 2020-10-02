import React, {useState} from 'react';

function anonymousTitle() {
    return (
        <button className="dropdown-title">
            <span className="menu-title-text">Login</span> <i className="fas fa-user-circle"></i>
        </button>
    );
}

function loggedInTitle(userName, userProfileImage) {
    return (
        <button className="dropdown-title">
            <span className="menu-title-text">{userName}</span>{userProfileImage ? 
                <img className="login-menu-user-image" href="" /> : 
                <i className="fas fa-user-circle"></i> }
        </button>
    );
} 

function userLinks() {
    return (
        <ul>
            <li><a href="#">Favorites</a></li>
            <li><a href="#">Update Profile</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    );
}

function loginForm() {
    return (
        <form className="login-menu-form" action="">
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="text"/>
                <label htmlFor="login-password">Password</label>
                <div>
                    <input id="login-password" type="text"/>
                </div>
                <input type='button' value="Log In" />
        </form>
    );
}

export default function LoginMenu() {
    let [ userName, setUserName ] = useState(false);
    let [ profileImage, setProfileImage ] = useState(false);

    return (
        <div className="dropdown-menu">
        { userName ? loggedInTitle(userName, profileImage) : anonymousTitle()}
        <div className="dropdown-links">
            {userName? userLinks() : loginForm()}
        </div>
    </div> 
    )
}
