import React from 'react';
import styles from './registration-form.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registrate } from '../../redux/auth-reducer';

type TypeProps = {
  registrate: (username: string, login: string, password: string) => void,
  history: any
}

type RegistrateState = {
  username: string;
  login: string;
  password: string;
}

class RegistrationForm extends React.Component<TypeProps, RegistrateState>{
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
    this.props.registrate(this.state.username, this.state.login, this.state.password);
    this.props.history.push('/account');
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}> <h1>Registration</h1></div>
        <form onSubmit={this.onSubmit} >
          <div>
            <label>Enter username:</label><br />
            <div className={styles.inputes}>
              <input name="username"
                type="Text"
                value={this.state.username}
                onChange={this.onInputChange} />
            </div>
          </div>
          <div>
            <label>Enter login:</label><br />
            <div className={styles.inputes}>
            <input name="login"
              type="Text"
              value={this.state.login}
              onChange={this.onInputChange} />
            </div>
          </div>
        <div>
          <label>Enter password:</label><br />
          <div className={styles.inputes}>
            <input name="password"
              type="Password"
              value={this.state.password}
              onChange={this.onInputChange} />
          </div>
        </div>
        <div>
          <input type="submit" value="Registrate" />
          <NavLink to="/login">
            <button>
              Login
            </button>
          </NavLink>
        </div>
        </form>
      </div >
    );
  }
}

export default connect(null, { registrate })(RegistrationForm);