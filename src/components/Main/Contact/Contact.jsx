import React, { Component } from "react";
import {userContext} from '../../../context/userContext';

class Contact extends Component {

  static contextType = userContext //aquí habrá un context consumer----internamente hace un this.context

  constructor(props) {
    super(props)
  
    this.state = {
       user:""
    }
  }


  login = (event) => {

    event.preventDefault(); //esto para el formulario para leer los inputs
    const user = event.target.user.value
    this.setState({user})
    this.context.login(user)

  }

  render() {
    return<div>
         <form onSubmit={this.login}>
          <label htmlFor="user">Nombre usuario:</label> <br />
          <input type="text" name="user"id="user"/> <br />
          <input type="submit" value="Enviar"/>
        </form>
        <p>Usuario introducido: {this.state.user ?this.state.user:"--"} </p>
  </div>;
  }
}

export default Contact;
