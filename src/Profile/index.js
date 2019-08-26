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
        const user = await fetch(`http://localhost:8000/user/${this.props.match.params.index}`)
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
                <div><img src={'http://localhost:8000/profile_pics/' + this.state.photo}/></div>
                <br/>
                <div>
                    <Button color="warning">Edit</Button>{' '}
                    <Button color="danger" onClick={() => { this.props.deleteClick(this.state.id) }}>Delete</Button>{' '}
                </div>
            </div>
        )
    }
}

export default Profile