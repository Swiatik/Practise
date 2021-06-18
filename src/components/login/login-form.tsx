import React from 'react';
import './login-form.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer'
type LoginState = {  
  login: string;
  password: string;
  profileInfo: any;
}

type LoginProps = {
  setAccount: any,
  history: any,
  login: any
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
      this.props.login(this.state.login, this.state.password);
      this.props.history.push('/account');
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
              <button>
                Registrate
              </button>                  
            </NavLink>
          </div>
        </form>
      );
  }
}
    
export default connect(null, {login})(LoginForm);

// import './login-form.css';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import {login} from '../../redux/auth-reducer'


// const LoginForm = (props: any) => {
//   return (
//       <form onSubmit={props.handleSubmit}>
//           <div>
//               <Field placeholder={"Login"} name={"login"}                     
//                     component={"input"}/>
//           </div>
//           <div>
//               <Field placeholder={"Password"} name={"password"} type={"password"}                     
//                      component={"input"}/>
//           </div>          
//           <div>
//               <button>Login</button>
//               <NavLink to="/create-account">
//                 <button>Registrate</button>
//               </NavLink>
//           </div>
//       </form>
//   )
// }

// const LoginReduxForm =  reduxForm({form: 'login'})(LoginForm)

// const Login = (props: any) => {
//     const onSubmit = (formData: any) => {
//         props.login(formData.login, formData.password);
//     }    

//     return <div>
//         <h1>Login</h1>
//         <LoginReduxForm onSubmit={onSubmit} />
//     </div>
// }

// export default connect(null, {login} )(Login);

