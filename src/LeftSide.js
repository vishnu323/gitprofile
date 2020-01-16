import React, { Component } from 'react'
import './data.scss';
import Tech from './1.jpeg';

class LeftSide extends Component {
    constructor(props){
        super(props);
       
    }
   
    render() {
        return (
            <div className="left">

                <div className="pic" >
                    <img src={Tech}/>
                </div>
                <div className="details">
                    <div className="details-name">
                        <span id="dname">{this.props.name}<br/>
                        <span id="dmail">{this.props.login}</span>
                        </span><br/><br/>
                        <button className="check"><span id="ex">Unfollow</span></button>

                    </div>
                   

                </div>
                <br/>
                <div className="main-details">
                    <span className="front-end-developer">
                    {this.props.bio}
                    <br/><br/>
                    &#128101; &nbsp;&nbsp;{this.props.company}<br/><br/>
                    &#127760; &nbsp;&nbsp;&nbsp;&nbsp;{this.props.location}<br/><br/>
                    &#9993;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="smail">
                    supreetsingh.247@gmail.com</span>
                    <br/><br/><span id="sub">block or report user</span>
                    </span>

                </div>
            </div>
        )
    }
}

export default LeftSide
