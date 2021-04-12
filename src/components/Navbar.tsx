import React from "react";
import { NavLink } from "react-router-dom";
import s from '../styles/navbar.module.css';

export function Navbar(){
    return (
        <nav className={s.menu}>
            <ul className={s.menuList}>
                <li className={s.menuItem} ><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.menuItem}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.menuItem}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
                <li className={s.menuItem}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s.menuItem}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.menuItem}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
                <li className={s.menuItem}><NavLink to="/indicator" activeClassName={s.active}>Indicator</NavLink></li>
            </ul>
        </nav>
    )
}

