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
               <span id="top-site"><svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    
               </span> 
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
