import React from 'react'
import { NavLink } from 'react-router-dom';


import './auth.styles.css'
// https://github.com/nanxiaobei/react-slide-routes

export default function Auth () {

    return (
        <div className={'auth'}>
            <span className='auth__text'>Мой аккаунт</span>
            <nav className={'switcher'}>
                <NavLink to='/login'>
                    Войти
                </NavLink>
                <NavLink to='/register'>
                    Регистрация
                </NavLink>
            </nav>      
        </div>
    )
}