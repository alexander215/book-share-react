import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import Login from "./Login"

const My404 = () =>{
  return(
    <div>
      Your bookmark fell out!!!
    </div>
  )
}

class App extends Component {
  render(){
    return(
      <main>
        <Switch>
          <Route exact path ="/" component = {generic}></Route>
          <Route exact path = "/login" component = {Login}></Route>
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