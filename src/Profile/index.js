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
            <div>{this.props.userInfo.username} is here</div>
        )
    }
}

export default Profile