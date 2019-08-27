import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { thisExpression } from "@babel/types";
import EditProfile from "../EditProfile"

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

    deleteClick = async (id, history) => {
        console.log("hitting deleteClick")
        try {
          const userResponse = await fetch('http://localhost:8000/user/' + id, {
            method: "DELETE",
            credentials: "include",
            // body: data,
            // headers: {
            //   'Content-Type': 'application/json'
            // }
          })
          console.log("before parsed response")
          // const parsedResponse = await userResponse.json()
          // console.log(parsedResponse, '<-- parsedResponse in deleteClick ')
    
          // router.push('/')
          return history.push(`/`)
        //   return <Redirect to='/users' />
    
          // return parsedResponse
    
        } catch (err){
          console.log(err)
        }
      }

    render(){
        console.log(this.state, "state in profile")
        console.log(this.props, "props in profile")
        return(
            <div>
                <div><h2>{this.state.username} is here!</h2></div>

                <div><img src={`${process.env.REACT_APP_BACKEND_URL}/profile_pics/` + this.state.photo}/></div>
                <br/>
                <div>

                    <Button color="warning" onClick={ () => this.props.history.push(`/${this.state.id}/edit`)}>Edit</Button>{' '}

                    <Button color="danger" onClick={() => { this.deleteClick(this.state.id) }}>Delete</Button>{' '}
                </div>
            </div>
        )
    }
}

export default Profile