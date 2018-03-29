import React from 'react';

class Player extends React.Component {
    render() {
        return (
            <div className="footer" style={{height: "80px", display: "flex"}}>
                <div style={{flex: "0 0 25%"}}>
                    <img src={this.props.img} 
                        style={{width: "60px", height: "60px", marginTop: "10px"}} />
                </div>
                <div style={{flex: "0 0 12.5%"}}></div>
                <div style={{flex: "0 0 25%", display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <i className="fa fa-step-forward fa-lg" style={{ marginTop: "15px" }}></i>
                        <i className="fa fa-pause-circle fa-lg" style={{ marginTop: "15px", textAlign: "center" }}></i>
                        <i className="fa fa-step-backward fa-lg" style={{ marginTop: "15px" }}></i>
                    </div>
                    <progress value="0.2" style={{height: "5px", marginTop: "15px"}}>
                    </progress>
                </div>
            </div>
        );
    }
}

export default Player;