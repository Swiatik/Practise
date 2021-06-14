import React from 'react';
import axios from 'axios';
import './login-form.css';

type LoginState = {  
  login: string;
  password: string;
}

export default class LoginForm extends React.Component<{}, LoginState>{
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
      this.state.login && this.state.password 
        && axios.post(`https://linkstagram-api.ga/login`, {           
          login: this.state.login,
          password: this.state.password
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
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
          </div>
        </form>
      );
  }
}