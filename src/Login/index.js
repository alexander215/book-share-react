import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component{
    state = {
        username: "",
        password: ""
    }

    render(){
        return(
            <Form className="loginForm">
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="enter username" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="enter password" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default Login