import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import Login from "./Login"
import Register from './Register'
import Profile from "./Profile"
import { async } from 'q';

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
    photo: ''
  }

  login = async (data) => {
    try {
      const loginResponse = await fetch ('http://localhost:8000/user/login', {
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
      const registerResponse = await fetch ('http://localhost:8000/user/register', {
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

  render(){
    return(
      <main>
        <Switch>
          <Route exact path ="/" component = {generic}></Route>
          <Route exact path = "/login" render={(props) => <Login {...props} logIn={this.login}/>}></Route>
          <Route exact path = "/register" render={(props) => <Register {...props} register={this.register}></Register>}></Route>
          <Route exact path = "/profile" render={(props) => <Profile {...props} userInfo={this.state}></Profile>}></Route>
          <Route component = {My404}/>
        </Switch>
      </main>
    )
  }
}

const generic = ()=>{
  return(
    <div>Main Page</div>
  )
}

export default App;