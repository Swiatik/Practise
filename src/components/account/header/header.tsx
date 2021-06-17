import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css';

const Header = () => {
    return <span className={s.header}>        
        <NavLink to='/login' className={s.logout}>
            <h3>Log out</h3>
        </NavLink>        
        <h1 >Site name</h1>
    </span>
}

export default Header;