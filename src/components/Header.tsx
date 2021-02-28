import React from "react";
import s from '../styles/header.module.css';

export function Header() {
    return (
        <header className={s.header}>
            <a href="#" className={s.headerLink}><img className={s.headerLogo} src="https://upload.wikimedia.org/wikipedia/ru/c/cb/Raspberry_Pi_Logo.svg" alt="logo"/></a>
        </header>
    )
}