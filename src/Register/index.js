import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Register extends Component{
    state = {
        username: "",
        password: "",
        email: "",
        photo: {}
    }

    render(){
        return(
        <Form className="loginForm">
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" placeholder="enter username" />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="enter email" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="enter password" />
            </FormGroup>
            <FormGroup>
                <Label for="photo">File</Label>
                <Input type="file" name="photo" id="photo" />
                <FormText color="muted">
                    Your image shouldn't be larger than 2MB.
                </FormText>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        )
    }
}

export default Register