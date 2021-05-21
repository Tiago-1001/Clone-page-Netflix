import React from 'react';
import './index.scss';
import SearchIcon from '@material-ui/icons/Search';
import CastIcon from '@material-ui/icons/Cast';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--cast">
                <a href="/">
                    <CastIcon className="header--castIcon" style={{fontSize: 25}}/>
                </a>
            </div>
            <div className="header--search">
                <a href="/">
                    <SearchIcon className="header--searchIcon" style={{fontSize: 25}}/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário" />
                </a>
            </div>

        </header>
    )
}