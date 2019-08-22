import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component{
    state = {
        username: "",
        password: ""
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e.target, "hits handlesubmit")

        const data = new FormData()
        data.append("username", this.state.username)
        data.append("password", this.state.password)
        console.log(this.state, "this is data in login")

        for (let pair of data.entries()){
            console.log(pair[0], ":", pair[1])
        }

        this.props.history.push("/profile")
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