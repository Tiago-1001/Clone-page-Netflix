import React from 'react';

import './index.scss';

import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

export default () => {
    return (
        <div>
            <div className="footerMobile">
                <a href="/">
                    <HomeIcon className="icon" style={{fontSize: 25}}/>
                    <p className="footer--home">Ínicio</p>
                </a>
                <a href="/">
                    <VideoLibraryIcon className="icon" style={{fontSize: 25}}/>
                    <p className="footer--after">Em Breve</p>
                </a>
                <a href="/">
                    <PlayForWorkIcon className="icon" style={{fontSize: 28}}/>
                    <p className="footer--downloads">Downloads</p>
                </a>

            </div>
            <footer>
                &copy; Tiago Farias, 2021 <br/>
                Direitos de imagens para Netflix <br/>
                Dados retirado do site Themoviedb.org
            </footer>
        </div>
    )
}