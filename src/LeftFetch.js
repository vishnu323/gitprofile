import React, { Component } from 'react';
import axios from 'axios';
import LeftSide from './LeftSide';
class LeftFetch extends Component {
    constructor(){
        super();
        this.state={
            post:[],
        }
    }
    componentDidMount(){
        axios.get("https://api.github.com/users/supreetsingh247").then(
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
    render() {
        const {post}=this.state;
        return (
         <React.Fragment>
        <LeftSide name={post.name} login={post.login} bio={post.bio}
        company={post.company} location={post.location}/>
                 
           
         </React.Fragment>
        )
    }
}

export default LeftFetch
