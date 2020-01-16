import React, { Component } from 'react'
import MainData from './MainData';
import axios from 'axios';
class Fetch extends Component {
    constructor(props){
        super(props);
        this.state={
            post:[],
            
        }
    }
    componentDidMount(){
        axios.get("https://api.github.com/users/supreetsingh247/repos").then(
            resp=> {
                this.setState({
                    post:resp.data
                    
                })
                console.log(this.state.post)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )

    }
    dataManage = () => {
        this.setState(
            {
                check:null
            }
        )
        
    }
    render() {
        const {post}=this.state;

        return (
        
            <div>
                {this.props.dataType!=="optionBox"?
            
               
                
                    
                
                post.filter(item => {
                        return (this.props.checkVal.length === 0 || (item.name && item.name.toLowerCase().indexOf(this.props.checkVal.toLowerCase()) != -1) ||
                        (item.description && item.description.toLowerCase().indexOf(this.props.checkVal.toLowerCase()) != -1)
                        ||(item.language && item.language.toLowerCase().indexOf(this.props.checkVal.toLowerCase()) != -1))}
                    ).map( pos =>
                {
                    {
               
                     
              return <MainData name={pos.name} des={pos.description} language={pos.language}
                iss={pos.private} update={pos.pushed_at}
                star={pos.stargazers_count} license={pos.license}/>
                  }
                }
            
            )

            :
            post.filter(item => {
                return (this.props.selectVal === "All" ||
              
                (item.language && item.language.toLowerCase().indexOf(this.props.selectVal.toLowerCase()) != -1))}
            ).map( pos =>
        {
            {
       
             
      return <MainData name={pos.name} des={pos.description} language={pos.language}
        iss={pos.private} update={pos.pushed_at} 
        star={pos.stargazers_count} license={pos.license}/>
          }
        }
    
    )
            
            
            
            
            }
            </div>
            
        )
    }
}

export default Fetch
