import React from 'react';
import './css/base.css';
import Header from './components/Header.jsx';
import MainMenu from './components/MainMenu.jsx';
import Content from './components/Content.jsx';

function App() {

    return (
        <div className="application">
            <Header />
            <MainMenu />
            <Content />
        </div>
    );
}

export default App;
