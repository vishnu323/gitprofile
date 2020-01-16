import React, { Component } from 'react';

import Fetch from './Fetch';
import './data.scss';

class RightSide extends Component {
    constructor(){
        super()
        this.state={
          
            dataVal:'',
            selectVal:'',
            dataType:'selectBox',
            moral:false,
            countCheck:1,
            leftData:"All",
            moral2:false,
            countCheck2:1,
            rightData:"All"

        }
        
        
    }
   
    handler = (e) => {
        this.setState(
            {
                dataVal:e.target.value,
                dataType:'selectBox'
            }
        )

    }
    changeState = (e) => {
        this.setState({
           
            countCheck:this.state.countCheck+1,
        })
        if(this.state.countCheck%2==1){
            this.setState({
                moral:true,
                moral2:false,
            })
        }
        else{
            this.setState({
                moral:false,
            })

        }

    }
    changeState2 = (e) => {
        this.setState({
           
            countCheck2:this.state.countCheck2+1,
        })
        if(this.state.countCheck2%2==1){
            this.setState({
                moral2:true,
                moral:false,
            })
        }
        else{
            this.setState({
                moral2:false,
            })

        }

    }
    dataUpdate = (e) => {
        this.setState({
          leftData:  e.target.innerText,
          moral:false,
        });
    }
    dataUpdate2 = (e) => {
        this.setState({
          rightData:  e.target.innerText,
          selectVal:e.target.innerText,
          dataType:'optionBox',
          moral2:false,
          
        });
    }
    

    componentWillUnmount(){
       
        console.log(this.state.leftData)  
    }

    
      

    render() {
       
        return (
            <div className="right">
                <div className="nav-bar">
                    <ul>
                        <li><a href="#">Overview</a> </li>
                        <li><a href="#">Repositories&nbsp;<span className="check-count">12</span></a></li>
                        <li><a href="#">Projects &nbsp;<span className="check-count">0</span></a></li>
                        <li><a href="#">Stars &nbsp;<span className="check-count">7</span></a></li>
                        <li><a href="#">Followers &nbsp;<span className="check-count">4</span></a></li>
                        <li><a href="#">Following&nbsp;<span className="check-count">2</span></a></li>
                    </ul>
                <div className="searcht">
                    <div className="top">
                    <input className="filt" value={this.state.dataVal} autocomplete="off" type="text" placeholder="Find a repository..." onChange={this.handler}/>
                    </div>
                    <div className="bottom">
                    <div className="bottom-select-left">
                                <span className="opcolor">Type:</span>&nbsp;&nbsp;<span className="troll">{this.state.leftData}
                                &nbsp;
                                <span onClick={this.changeState}>&#9660;</span></span>
                        <div className={this.state.moral?"left-menu":"datamisses"}>
                            <div className="selectdiv" value="All" onClick={this.dataUpdate}>  All  </div>
                            <div className="selectdiv" value={"Sources"} onClick={this.dataUpdate}>Sources</div>
                            <div className="selectdiv"  value={"Forks"} onClick={this.dataUpdate}>Forks</div>
                            <div className="selectdiv" value={"Archived"} onClick={this.dataUpdate}>Archived</div>
                            <div className="selectdiv" value={"Mirrors"} onClick={this.dataUpdate}>Mirrors</div>
                        </div>
                                
                     </div>
                        

                    <div className="bottom-select-right">
                        <span className="opcolor">  Language:</span>&nbsp;&nbsp;<span className="troll">{this.state.rightData}&nbsp;
                        <span onClick={this.changeState2}>&#9660;</span></span>
                        <div className={this.state.moral2?"right-menu":"datamisses2"}>
                            <div className="selectdiv2" value={"All"} onClick={this.dataUpdate2}>  All  </div>
                            <div className="selectdiv2" value={"HTML"} onClick={this.dataUpdate2}>HTML</div>
                            <div className="selectdiv2"  value={"JavaScript"} onClick={this.dataUpdate2}>JavaScript</div>
                            <div className="selectdiv2" value={"CSS"} onClick={this.dataUpdate2}>CSS</div>
                          
                        </div>    


                    </div>
                        
                        
                    </div>
                
                    </div>
                  <Fetch checkVal={this.state.dataVal} selectVal={this.state.selectVal} dataType={this.state.dataType}/>
                    
                </div>
             
               
               
            </div>
               
        )
    }
}

export default RightSide
