import React from 'react';
import axios from 'axios';
import './registration-form.css';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

type RegistrateState = {
  username: string;
  login: string;
  password: string;  
}

// type RegistrateProps = {
//   setAccount: any,
//   history: any,
// }

class RegistrationForm extends React.Component<{}, RegistrateState>{
    state: RegistrateState = {
      username: "",
      login: "",
      password: "",      
    };
  
    onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {        
        const { name, value } = e.currentTarget;     
        e.preventDefault()
        this.setState({ [name]: value } as RegistrateState);        
    };
    
    onSubmit = (e: any): void => {
      e.preventDefault();
      this.state.username && this.state.login && this.state.password 
        && axios.post(`https://linkstagram-api.ga/create-account`, { 
          username: this.state.username,
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
            <label>Enter username:</label><br/>
            <input name="username" 
                   type="Text" 
                   value={this.state.username} 
                   onChange={this.onInputChange}/>
          </div>
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
            <input type="submit" value="Registrate"/>
            <NavLink to="/login">
              <button>
                  Login
              </button>
            </NavLink>
          </div>
        </form>
      );
  }
}

// let mapDispatchToProps = (dispatch: any) => {
//   return {        
//       setAccount: (user: any) => {
//           dispatch(setAccountCreator(user));
//       }
//   }
// }

export default connect(null, null)(RegistrationForm);