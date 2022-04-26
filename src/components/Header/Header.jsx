import React, { Component } from 'react'
import Nav from './Nav'
import {userContext} from '../../context/userContext';

export class App extends Component {
  render() {
    return (
      <header>
        <Nav/>
        <div>
        <userContext.Consumer>
          {({user,logout}) =>
              user?
                <>
                  <p>Hola, {user}</p>
                  <button onClick={logout}>Logout</button>
                </>:<button>Login</button>
          }
          </userContext.Consumer>
        </div>
        </header>
    )
  }
}

export default App