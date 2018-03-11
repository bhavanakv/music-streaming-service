import React from 'react';
import {Link} from 'react-router-dom';

class Sidenav extends React.Component {
    render()
    {
        return(
            <div className="sidenav">
                <ul>
                <li style={{marginLeft: "6px",color: "#818181",marginBottom: "2px"}}>BROWSE</li>
                <li>
                    <i className="fa fa-home" style={{color: "white"}}></i>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <i className="fa fa-list" style={{color: "white"}}></i>
                    <Link to="/playlist">Playlist</Link>
                </li>
                <li style={{marginLeft: "6px",color: "#818181",marginBottom: "2px",marginTop: "15px"}}>RECENT</li>
                <li>
                    <Link to="/list">Played</Link>
                </li>
                <li>
                    <Link to="/list">Added</Link>
                </li>
                <li style={{marginLeft: "6px",color: "#818181",marginBottom: "2px",marginTop: "15px"}}>MY MUSIC</li>
                <li>
                    <Link to="/list">Albums</Link>
                </li>
                <li>
                    <Link to="/list">Songs</Link>
                </li>
                <li>
                    <Link to="/list">Genre</Link>
                </li>
                <li>
                    <i className="fa fa-plus" style={{color: "white",marginLeft: "2px",marginTop: "20px"}}></i>
                    <Link to="/add" style={{marginLeft: "3px"}}> Create new playlist</Link>
                </li>
                </ul>
            </div>
        );
    }
}

export default Sidenav;