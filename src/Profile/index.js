import React, {Component} from "react"
import {Link} from "react-router-dom"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { thisExpression } from "@babel/types";

class Profile extends Component{
    state={
        id: 1,
        username: "",
        password: "",
        email: "",
        photo: {}
    }

    async componentDidMount(){
        const user = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${this.props.match.params.index}`)
        const parsedUser = await user.json()
        this.setState({
            ...parsedUser.data
        })
    }

    render(){
        console.log(this.state, "state in profile")
        console.log(this.props, "props in profile")
        return(
            <div>
                <div><h2>{this.state.username} is here!</h2></div>
                <img src={`${process.env.REACT_APP_BACKEND_URL}/profile_pics/` + this.state.photo}/>
            </div>
        )
    }
}

export default Profile