import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteToken } from '../../api/api';
import styles from './header.module.css';

const Header = (props: any) => {
    return <span className={styles.header}>
            <NavLink onClick={ () => deleteToken()} to='/login' className={styles.logout}>
                <h3>Log out</h3>
            </NavLink>
            <h3 className={styles.logout}>{props.username}</h3>
            <h1>Site name</h1>
    </span>
}

let mapStateToProps = (state: any) => {
    return {
        username: state.auth.auth.username
    }
}

export default connect(mapStateToProps, null)(Header);