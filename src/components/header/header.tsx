import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteToken } from '../../api/api';
import { AppStateType } from '../../redux/store';
import styles from './header.module.css';

type PropsType = {
    username?: string
}

const Header = (props: PropsType) => {
    return <span className={styles.header}>
            <NavLink onClick={ () => deleteToken()} to='/login' className={styles.logout}>
                <h3>Log out</h3>
            </NavLink>
            <h3 className={styles.logout}>{props.username}</h3>
            <h1>Practise site</h1>
    </span>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        username: state.auth.auth.username
    }
}

export default connect(mapStateToProps, null)(Header);