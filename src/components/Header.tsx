import React from "react";
import {NavLink} from "react-router-dom";
import s from '../styles/header.module.css';

export function Header(props: any) {
    return (
        <header className={s.header}>
            <a href="#" className={s.headerLink}><img className={s.headerLogo}
                                                      src="https://upload.wikimedia.org/wikipedia/ru/c/cb/Raspberry_Pi_Logo.svg"
                                                      alt="logo"/></a>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}