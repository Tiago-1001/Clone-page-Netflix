import React from 'react';
import './index.scss';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://br.pinterest.com/pin/616782111461017921/" alt="Usuário" />
                </a>
            </div>
        </header>
    )
}