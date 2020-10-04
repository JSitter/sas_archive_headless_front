import React from 'react';
import seminarycover from "../assets/seminarycover50.jpg";

export default function Header() {
    let screenWidth = window.innerWidth;
    return (
        <section className="main-header white-links">
            <img className="header-hero" src={seminarycover} />
            <section className="header-text">
                <h1>Saint Anthony's Seminary Archive</h1>
                <p>1896-1987</p>
            </section>
        </section>
    );
}
