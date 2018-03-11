import React from 'react';

class NewReleases extends React.Component {
    render()
    {
        return(
            <div>
                <div id="demo" className="carousel slide" data-ride="carousel" 
                    style={{marginLeft: "380px",marginTop: "30px",marginRight: "150px"}} 
                    data-interval="2500">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner text-center">
                        <div className="carousel-item active">
                            <img src="/static/first.jpeg" />
                        </div>
                        <div className="carousel-item text-center">
                            <img src="/static/earphone.jpeg" />
                        </div>
                        <div className="carousel-item text-center">
                            <img src="/static/relax.jpg" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        );
    }
}

export default NewReleases;