import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, Redirect } from "react-router-dom"
import { Button } from 'reactstrap';
import Login from "./Login"
import Register from './Register'
import Profile from "./Profile"
import NavBar from './Navbar'
import EditProfile from "./EditProfile"

import { async } from 'q';
import Users from './Users';

const My404 = () =>{
  return(
    <div>
      Your bookmark fell out!!!
    </div>
  )
}

class App extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    photo: '',
  }

  login = async (data) => {
    try {
      const loginResponse = await fetch (`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {          
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json()
      console.log(parsedResponse, '<--parsedResponse in login route')

      this.setState({
        ...parsedResponse.data
      })

      return parsedResponse

    } catch(err){
      console.log(err)
    }
  }

  register = async (data) => {
    try {
      const registerResponse = await fetch (`${process.env.REACT_APP_BACKEND_URL}/user/register`, {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json();
      console.log(parsedResponse, '<--parsedResponse in register route')

      this.setState({
        ...parsedResponse.data
      })
      return parsedResponse;

    } catch (err){
      console.log(err)
    }
  }

  // deleteClick = async (id, history) => {
  //   console.log("hitting deleteClick")
  //   try {
  //     const userResponse = await fetch('http://localhost:8000/user/' + id, {
  //       method: "DELETE",
  //       credentials: "include",
  //       // body: data,
  //       // headers: {
  //       //   'Content-Type': 'application/json'
  //       // }
  //     })
  //     console.log("before parsed response")
  //     // const parsedResponse = await userResponse.json()
  //     // console.log(parsedResponse, '<-- parsedResponse in deleteClick ')

  //     // router.push('/')
  //     // return history.push(`/`)
  //     return <Redirect to='/users' />

  //     // return parsedResponse

  //   } catch (err){
  //     console.log(err)
  //   }
  // }

  userList = async(data) =>{
    console.log("hitting userList")
    try{
      const userResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/`, {
        method: "GET",
        credentials: "include",
        body: data,
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await userResponse.json()
      console.log(parsedResponse.data, '<--parsedResponse in userList route')

      return parsedResponse.data
    } catch(err){
      console.log(err)
    }
  }

  render(){
    return(
      <main>
        <div>
          <NavBar nav={this.state}/>
          <br/>
        </div>
        <div class='main'>
          <Switch>
            <Route exact path ="/" component = {generic}></Route>
            <Route exact path = "/login" render={(props) => <Login {...props} logIn={this.login}/>}></Route>
            <Route exact path = "/register" render={(props) => <Register {...props} register={this.register}></Register>}></Route>
            <Route exact path = "/profile/:index" render={(props) => <Profile {...props} deleteClick={this.deleteClick} userInfo={this.state}></Profile>}></Route>
            <Route exact path= "/users" render={(props) => <Users {...props} userState={this.state} userList={this.userList}></Users>}></Route>
            <Route exact path= "/:id/edit" render={(props) => <EditProfile {...props} userState={this.state}></EditProfile>}></Route>
            <Route component = {My404}/>
          </Switch>
        </div>
      </main>
    )
  }
}

const generic = ()=>{
  return(
    <div>
      <h1 class='title'>Free the Books!</h1>
      <br/>
      <br/>
      <br/>
      <div>
        <Link to='/login'>
          <Button color="primary" size="lg" block>Login</Button>
        </Link>
        <br/>
        <Link to='/register'>
          <Button color="secondary" size="lg" block>Register</Button>
        </Link>
      </div>

    </div>
  )
}

export default App;