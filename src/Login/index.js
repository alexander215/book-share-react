import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { async } from "q";
import {Link} from "react-router-dom"

class Login extends Component{
    state = {
        username: "",
        password: ""
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
    
        const login = this.props.logIn(this.state);
    
        login.then((data) => {
          if(data.status.message === 'Success'){
            this.props.history.push('/profile')
          } else {
            console.log(data, this.props)
          }
        }).catch((err) => {
          console.log(err)
        })
    }

    render(){
        return(
            <Form className="loginForm" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="enter username" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="enter password" onChange={this.handleChange}/>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}

export default Login