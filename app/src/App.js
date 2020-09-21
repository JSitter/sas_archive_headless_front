import React from 'react';
import './css/base-styles.css';
import dockerBrands from './assets/dockerBrands.svg';

function App() {

    return (
        <div className="application">
            <div className="header">
            <a href="https://fontawesome.com/license/free">
                <img className="docker-logo" src={dockerBrands} />
            </a>
            <h1>Simple Dockerized React App</h1>
            </div>
            <p>
                This repo is an example of a simple React app the builds into a folder that can be hosted on any normal hosting provider.
            </p>
            <p>
                Simply copy the contents of the dist folder to your server to host your single page application on a regular LAMP stack.
            </p>
        </div>
    );
}

export default App;