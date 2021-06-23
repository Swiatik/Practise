import React from 'react';
import styles from './login-form.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer'

type LoginState = {
  login: string
  password: string
}

type LoginProps = {
  history: any
  login: (login: string, password: string) => void
}

class LoginForm extends React.Component<LoginProps, LoginState>{
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
    this.props.login(this.state.login, this.state.password);
    this.props.history.push('/account');
  }

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Enter login:</label><br />
            <input name="login"
              type="Text"
              value={this.state.login}
              onChange={this.onInputChange} />
          </div>
          <div>
            <label>Enter password:</label><br />
            <input name="password"
              type="Password"
              value={this.state.password}
              onChange={this.onInputChange} />
          </div>
          <div>
            <input type="submit" value="Login" />
            <NavLink to="/create-account">
              <button>
                Registrate
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { login })(LoginForm);