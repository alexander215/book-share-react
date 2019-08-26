import React, {Component} from "react"
import {Link} from "react-router-dom"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Profile extends Component{
    state={
        id: 1,
        username: "",
        password: "",
        email: "",
        photo: {}
    }



    render(){
        console.log(this.state, "state in profile")
        console.log(this.props, "props in profile")
        return(
            <div>
                <div><h2>{this.props.userInfo.username} is here!</h2></div>
                <img src={'http://localhost:8000/profile_pics/' + this.props.userInfo.photo}/>
            </div>
        )
    }
}

export default Profile