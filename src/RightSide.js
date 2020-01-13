import React, { Component } from 'react';

import Fetch from './Fetch';
import './data.scss';

class RightSide extends Component {
    constructor(){
        super()
        this.state={
          
            dataVal:'',
            selectVal:'',
            dataType:'selectBox'

        }
        
    }
    dataHandler = (e) => {
        this.setState({
            selectVal:e.target.value,
            dataType:'optionBox'
        })
    }
    handler = (e) => {
        this.setState(
            {
                dataVal:e.target.value,
                dataType:'selectBox'
            }
        )

    }
    render() {
       
        return (
            <div className="right">
                <div className="nav-bar">
                    <ul>
                        <li><a href="#">Overview</a> </li>
                        <li><a href="#">Repositories&nbsp;12</a></li>
                        <li><a href="#">Projects &nbsp;0</a></li>
                        <li><a href="#">Stars &nbsp;7</a></li>
                        <li><a href="#">Followers &nbsp;4</a></li>
                        <li><a href="#">Following&nbsp;2</a></li>
                    </ul>
                    <div className="searcht">
                    <div className="top">
                    <input className="filt" value={this.state.dataVal} type="text" placeholder="Find a repository..." onChange={this.handler}/>
                    </div>
                    <div className="bottom">
                    <select>
                        <optgroup label="Select type">Type:
                            <option value="ALL" selected>All</option>
                            <option value="Sources" selected>Sources</option>
                            <option value="Forks" selected>Forks</option>
                            <option value="Archived" selected>Archived</option>
                            <option value="Mirrors" selected>Mirrors</option>
                        </optgroup>
                    </select>
                    <select id="bulk" onChange={this.dataHandler}>
                        <optgroup label="Select type">Type:
                            <option value="ALL" selected>ALL</option>
                            <option value="HTML" selected>HTML</option>
                            <option value="JAVASCRIPT" selected>JAVASCRIPT</option>
                            <option value="CSS" selected>CSS</option>
                            
                        </optgroup>
                    </select>
                    </div>
                
                    </div>
                  <Fetch checkVal={this.state.dataVal} selectVal={this.state.selectVal} dataType={this.state.dataType}/>
                    
                </div>
             
               
               
            </div>
               
        )
    }
}

export default RightSide
