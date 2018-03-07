import React from 'react';
import Navbar from './Navbar.jsx';

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
                linkTo: '/newrelease'
            }
        ];
        return(
            <div>
                <div className="main">
                    <Navbar links={links} />
                </div>
            </div>
        )
    }
}

export default MainPage;