import React from 'react';
import Navbar from './Navbar.jsx';
import Sidenav from './Sidenav.jsx';
import Player from './Player.jsx';
import NewReleases from './NewReleases.jsx';

class MainPage extends React.Component {
    render() {
        var links = [
            {
                name: 'Featured',
                linkTo: '/featured'
            },
            {
                name: 'Genres',
                linkTo: '/genres'
            },
            {
                name: 'New releases',
                linkTo: '/mainpage'
            }
        ];
        return(
            <div>
                <Navbar links={links} />
                <div>
                <Sidenav />                  
                </div>
                <NewReleases />
                <Player img="/static/first.jpeg" />
            </div>
        )
    }
}

export default MainPage;