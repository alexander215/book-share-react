import React, {Component} from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { async } from "q";

class Users extends Component{
    state={
        users: []
        // username: "",
        // password: "",
        // email: "",
        // photo: {}
    }

    componentDidMount = async()=> {
        const userList = await this.props.userList()
        this.setState({
            users: userList
        })
    }
    
    // const users = this.state.users.map(user => {
        //     return (
            //         <div>{}</div>
            //     )
            // })
            
    render(){
        console.log(this.state.users, "this the users!!!!!")
        console.log(this.state.users[0], "email")
        return(
            this.state.users.map(user => 
                <div>
                <div>{user.email}</div>
                <div>{user.username}</div>
                <img src={'http://localhost:8000/profile_pics/' + user.photo}/>
                </div>
            )
        )
            
    }
}

export default Users