import React from 'react';
import Navbar from './Navbar.jsx'

class Home extends React.Component {

    render() {
        var links = [
            { name: "About",
              linkTo: "/about"
            },
            { name: "Contact",
              linkTo: "/contact"
            },
            { name: "Register",
              linkTo: "/register" 
            },
            { name: "Login",
              linkTo: "/login"
            }
        ];
        return (
            <div>
                <div className="background">
                    <img className="blur" src="/static/first.jpeg" alt="" width="100%" height="100%" />
                    <div className="foreground">
                        <Navbar links = {links} />
                        <div className="heading">
                            <h1>It's MUSIC time!</h1>
                            <h5>Beatbox, a free music player that plays the music you enjoy...</h5> 
                            <h5>Join for free and discover the music...</h5>
                        </div>
                        <p className="account">Don't have an account? 
                            <a href="#"> Sign up</a></p>
                    </div> 
                </div>
                
            </div>
        );

    }
}

export default Home;