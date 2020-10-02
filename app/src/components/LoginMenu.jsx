import React from 'react';


export default function LoginMenu() {
    return (
        <form className="login-menu-form" action="">
            <label htmlFor="login-email">Email</label>
            <input id="login-email" type="text"/>
            <label htmlFor="login-password">Password</label>
            <div>
                <input id="login-password" type="text"/>
            </div>
            <button type='button' />
        </form>
    )
}
