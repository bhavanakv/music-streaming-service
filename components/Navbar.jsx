import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-headphones"></i><b> BeatBox</b></a>
                    <div className="navbar-collapse navbar"> 
                    <ul className="nav navbar-nav ml-auto">
                        {this.props.links.map((l,i) =>
                            <li key={i} style={{marginRight: "15px"}} className="nav-item">
                                <Link to={l.linkTo}>{l.name}</Link></li> 
                        )}
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
