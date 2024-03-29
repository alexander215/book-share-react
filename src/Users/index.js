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
                    <div><h2>{user.username}</h2></div>
                    <div>{user.email}</div>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/profile_pics/` + user.photo}/>
                </div>
            )
        )
            
    }
}

export default Users