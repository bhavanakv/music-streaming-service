import React from 'react';
import Navbar from './Navbar.jsx';
import { Link } from 'react-router-dom';

const About = () => {
    var links = [
        {   name: 'Back to home',
            linkTo: "/"
        }
    ];
    return(
        <div>
            <Navbar links = {links} />
            <div className="about">
                <h1 style={{color: '#ff5252', marginTop: "20px", marginLeft:"30px"}}>About</h1>
                <div className="card" style={{width: '75%',marginLeft: '160px',background:'transparent'}}>
                    <img className="card-img-top" src="/static/listen.png" alt="Card image cap" />
                    <div className="card-body">
                        <h2 className="card-title" style={{color: '#ff5252'}}>About</h2>
                        <p className="card-text" style={{color: 'white'}}>Beatbox is a Music Streaming Application which allows you to discover and enjoy the music you love to hear.</p>
                        <div className="row">
                        <div className="col-4 text-center">
                            <i className="fa fa-search fa-2x" style={{color: '#ff5252'}}></i><h5 style={{color: '#ff5252',marginTop: '10px'}} className="text-center">Discover music you love!</h5>
                            <p style={{color: 'white'}}>Search for your favourite songs quickly</p>
                        </div>
                        <div className="col-4 text-center">
                            <i className="fa fa-list-alt fa-2x" style={{color: '#ff5252'}}></i><h5 style={{color: '#ff5252',marginTop: '10px'}} className="text-center">Create playlists</h5>
                            <p style={{color: 'white'}}>Build and Edit your songs into playlists</p>
                        </div>
                        <div className="col-4 text-center">
                            <i className="fa fa-headphones fa-2x" style={{color: '#ff5252'}}></i><h5 style={{color: '#ff5252',marginTop: '10px'}} className="text-center">Listen to the tunes</h5>
                            <p style={{color: 'white'}}>Play music by song, artist, album or playlist and also view upcoming music</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

