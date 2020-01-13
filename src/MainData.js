import React, { Component } from 'react'
import './data.scss';
class MainData extends Component {
    constructor(props){
        super(props);
        this.state={
            val:"Star"
        }
    
    }
    data(val){
        let check=val.split(':')
        let sub=check[0].split('-')
        let dateval=''
        let month=''
        if(sub[1]==1)
            month='Jan'
        else if(sub[1]==2)
            month='Feb'
        else if(sub[1]==3)
            month='Mar'
        else if(sub[1]==4)
            month='Apr'
        else if(sub[1]==5)
            month='May'
        else if(sub[1]==6)
            month='June'
        else if(sub[1]==7)
            month='July'
        else if(sub[1]==8)
            month='Aug'
        else if(sub[1]==9)
            month='Sep'
        else if(sub[1]==10)
            month='Oct'
         else if(sub[1]==11)
            month='Nov'
        else if(sub[1]==12)
            month='Dec'
        else
            month=sub[1]
        return sub[2].substring(0,2)+" "+month+" "+sub[0]

    }
    render() {
        return (
            <div className="user-details">
                <div className="user-top-left">
               <span id="user-name"> {this.props.name}</span><br/>
               <span id="user-des">
               {this.props.des} </span><br/>
                </div>
                <div className="user-top-right">
                    <button id="change-color">&#9733;{this.state.val}</button>
                </div>
                <br/><br/>
                <div className="user-bottom-left">
                
                    
                    

                </div>
                <div className="user-bottom-right">
                <span className="bottom-header">
                    <span>
                &#127860; &nbsp;{this.props.language}
                </span>
                <span id="head1">
                &#127760;&nbsp;Issues:{this.props.iss}
                </span>
                <span id="head2">
                   
                &#127948;&nbsp;Updated on &nbsp;&nbsp;
                {this.data(this.props.update)}
                </span>
                </span>
                    

                </div>
                    
                
            </div>
        )
    }
}

export default MainData
