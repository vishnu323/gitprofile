import React, { Component } from 'react'
import './data.scss';
import Cat from './cat.png';
import Bell from './bell.png';
import Plus from './plus.jpg';
import Icon from './icon.png';

class Nav extends Component {
    constructor(){
        super();
        this.state={
            count_plus:1,
            count_img:1,
            plus_check:false,
            img_check:false,
        }
    }
    plusClick= () => {
      this.setState(
          {
              count_plus:this.state.count_plus+1
          }
      )
      if(this.state.count_plus%2===1){
        
          this.setState({
              plus_check:true
          })
      }
      else{
        this.setState({
            plus_check:false
        })

      }
    }
    imgClick = () => {
        this.setState(
            {
                count_img:this.state.count_img+1
            }
        )
        if(this.state.count_img%2===1){
            this.setState({
                img_check:true
            })
        }
        else{
          this.setState({
              img_check:false
          })
  
        }
        
    }
    render() {
        return (
            <React.Fragment>
                <div className="icon">
                    <span>
                <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                </span> </div>
                <div className="left-div">
                    <img src={Cat}/>
                    

                </div>
                
                <div className="left-div-second">
                    <input type="text" placeholder="Search or jump to..."/>

                </div>
                <div className="middle-div">
                    <ul>
                        <li>Pull Requests</li>
                        <li>Issues</li>
                        <li>Marketplace</li>
                        <li>Explore</li>

                    </ul>

                </div>
            <div className="super">
                <div className="right-div">
                    <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
               

                </div>
                <div className="right-div-second">
                    
                &nbsp;  <svg className="bottom-tri" class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
                    <span className="bottom-tri"  onClick={this.plusClick}>&#9660;</span>
                    &nbsp;  &nbsp; 
                    {this.state.plus_check?
                    <div className="plus-option-bar">
                       <ul>
                           <li>New repository</li>
                           <li>Import repository</li>
                           <li>New gist</li>
                           <li>New Organization</li>
                           <li>New Project</li>
                       </ul>

                        </div>
                    :null}
                    
                    <img src={Icon}/>
                    
                
                    <span className="bottom-tri" onClick={this.imgClick}>&#9660;</span>
                    {this.state.img_check?
                    <div className="image-option-bar">
                        <br/>
                        <span className="datatext">
                            Sigened in as<br/>
                            namana vishnu

                        </span>
                        <br/>
                        <div className="smile">
                            <br/>
                            <button><span className="smileicon">&#9786;</span>&nbsp;&nbsp;&nbsp;&nbsp;smile</button>
                            </div>
                       <ul>
                           <li>Your profile</li>
                           <li>Your repositories</li>
                           <li>Your projects</li>
                           <li>Your stars</li>
                           <li>Your gists</li>
                           <br/><br/>
                           <li>Feature preview</li>
                           <li>Help</li>
                           <li>Settings</li>
                           <li>Sing out</li>
                       </ul>

                        </div>
                    :null}
                    
                    
                </div>
            </div>
                
                
                
            </React.Fragment>
        )
    }
}

export default Nav
