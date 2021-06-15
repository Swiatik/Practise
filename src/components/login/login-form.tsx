import React from 'react';
import axios from 'axios';
import './login-form.css';
import { NavLink } from 'react-router-dom';

type LoginState = {  
  login: string;
  password: string;
}

type LoginProps = {
  history: any
}
export default class LoginForm extends React.Component<LoginProps, LoginState>{
    state: LoginState = {      
      login: "",
      password: ""
    };
        
    onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {        
        const { name, value } = e.currentTarget;
        e.preventDefault()
        this.setState({ [name]: value } as LoginState);        
    };
    
    onSubmit = (e: any): void => {
      e.preventDefault();
      // alert("login: " + this.state.login + "\npassword: " + this.state.password );
      this.state.login && this.state.password 
        && axios.post(`https://linkstagram-api.ga/login`, {           
          login: this.state.login,
          password: this.state.password
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);          
        })
    }

    render() {
      return (
        <form onSubmit={this.onSubmit}>          
          <div>
            <label>Enter login:</label><br/>
            <input name="login" 
                   type="Text" 
                   value={this.state.login}
                   onChange={this.onInputChange}/>
          </div>
          <div>
            <label>Enter password:</label><br/>
            <input name="password" 
                   type="Password" 
                   value={this.state.password}
                   onChange={this.onInputChange}/>
          </div>          
          <div>
            <input type="submit" value="Login"/>
            <NavLink to="/create-account">
              <button >
                  Registrate
              </button>
            </NavLink>
          </div>
        </form>
      );
  }
}