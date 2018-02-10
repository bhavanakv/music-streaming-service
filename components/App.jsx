import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-headphones"></i><b> BeatBox</b></a>
                    <div className="navbar-collapse navbar"> 
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Genres</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">New Releases</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

class SideNav extends React.Component {
    render() {
        return (
            <div style={{flex: "0 0 20%", display: "flex", flexDirection: "column", backgroundColor: "black", height: "100%" }}> 
            <br />
                <ul className="sidenav">
                    <li>
                    <img src="/static/user.png" className="rounded-circle" width="80" height="80" />
                    </li>
                    <li>
                        <h6><b>Username</b></h6>
                    </li>
                    <br />
                    <li classname="searchAlign">
                        <input className="form-control" type="text" id="search" placeholder="Search" height="25px" width="150px"/>
                    </li>
                    <br />
                    <li>
                        <a href="#">My playlist</a>
                    </li>
                    <li>
                        <a href="#">Songs</a>
                    </li>
                    <li>
                        <a href="#">Artist</a>
                    </li>
                    <li>
                        <a href="#">Singer</a>
                    </li>
                </ul>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <div style={{ display: "flex" }}>
                    <SideNav />
                </div>
            </div>
        );
    }
}

export default App;