import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Register extends Component{
    state = {
        username: "",
        password: "",
        email: "",
        photo: {}
    }

    handleChange = (e) =>{
        if(e.target.name !== "photo"){
            this.setState({[e.target.name]: e.target.value})
        } else{
            this.setState({photo: e.target.files[0]})
            console.log(e.target.files[0])
        }
        console.log(this.state)
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('username', this.state.username);
        data.append('password', this.state.password);
        data.append('email', this.state.email);
        data.append('file', this.state.photo);
        console.log(data, '<-handlesubmit in e.preventDefault');
        console.log(this.state, '<-this.state in e.preventDefault')

        for (let pair of data.entries()){
            console.log(pair[0] , ', ', pair[1])
        }
        const registerCall = await this.props.register(data)
        console.log(registerCall)
        if(registerCall.status.message === "Success"){
            this.props.history.push(`/profile/${registerCall.data.id}`)
        }else{
            console.log("user exists")
        }

        
    }

    render(){
        return(
        <Form className="loginForm" onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" placeholder="enter username" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="enter email" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="enter password" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="photo">File</Label>
                <Input type="file" name="photo" id="photo" onChange={this.handleChange}/>
                <FormText color="muted">
                    Your image shouldn't be larger than 2MB.
                </FormText>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
        )
    }
}

export default Register