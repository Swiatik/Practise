import React from 'react';
import axios from 'axios';
import './login-form.css';
import { NavLink } from 'react-router-dom';
import {dispatchUser} from '../../redux/profiles-reducer'
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

type LoginState = {  
  login: string;
  password: string;
  profileInfo: any;
}

type LoginProps = {
  history: any,
  dispatchUser: any
}
class LoginForm extends React.Component<LoginProps, LoginState>{
    state: LoginState = {      
      login: "",
      password: "",
      profileInfo: null
    };
        
    onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {        
        const { name, value } = e.currentTarget;
        e.preventDefault()
        this.setState({ [name]: value } as LoginState);        
    };
    
    onSubmit = (e: any): void => {
      e.preventDefault();
      
      this.state.login && this.state.password 
        && axios.post(`https://linkstagram-api.ga/login`, {           
          login: this.state.login,
          password: this.state.password
        })
        .then(res => {
          
        })
        .catch(err => {
          console.log(err);          
        })
                  
        axios.get(`https://linkstagram-api.ga/profiles/${this.state.login}`)        
        .then(res => {                    
          debugger;
          this.props.dispatchUser(res.data);
          this.props.history.push(`/profiles/${this.state.login}`)
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
            {/* <NavLink onClick={this.onSubmit} to={{pathname: `/profiles/${this.state.login}`}}> */}
              <input type="submit" value="Login"/>
            {/* </NavLink> */}
            <NavLink to="/create-account">
              <button>
                Registrate
              </button>                  
            </NavLink>
          </div>
        </form>
      );
  }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ dispatchUser }, dispatch)
    
export default connect(null, mapDispatchToProps)(LoginForm);