import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class EditProfile extends Component {
    state={
        username: '',
        email: '',
        password: '',
        photo: ''
    }

    handleChange = (e) =>{
        if(e.target.name !== "photo"){
            this.setState({[e.target.name]: e.target.value})
        } else{
            this.setState({photo: e.target.files[0]})
            console.log(e.target.files.name, "e.target.file")
            console.log(this.state.photo, "this.state.photo")
        }
        console.log(this.state)
        console.log(this.props.match.params.id, "this.props.match")
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const loginResponse = await fetch (`${process.env.REACT_APP_BACKEND_URL}/user/${this.props.match.params.id}`, {
              method: "PUT",
              credentials: "include",
              body: JSON.stringify(this.state),
              headers: {          
                'Content-Type': 'application/json'
              }
            })
      
            const parsedResponse = await loginResponse.json()
            console.log(parsedResponse, '<--parsedResponse in login route')
      
            // this.setState({
            //   ...parsedResponse.data
            // })
      
            return parsedResponse
      
          } catch(err){
            console.log(err)
          }

        // data.append('username', this.state.username);
        // data.append('password', this.state.password);
        // data.append('email', this.state.email);
        // data.append('file', this.state.photo);
        console.log(this.state, '<-this.state in e.preventDefault')

        // for (let pair of data.entries()){
        //     console.log(pair[0] , ', ', pair[1])
        // }
        // const registerCall = await this.props.register(data)
        // console.log(registerCall)
        // if(registerCall.status.message === "Success"){
        //     this.props.history.push(`/profile/${registerCall.data.id}`)
        // }else{
        //     console.log("user exists")
        // }

        
    }

    render(){
        return(
        <div>
            <h4>Edit User</h4>

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
        </div>
    )
        }
}

export default EditProfile