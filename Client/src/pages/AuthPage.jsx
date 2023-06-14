import React from 'react';
import { Route } from 'react-router-dom';

import Auth from '../components/auth/Auth';
import Login from '../components/login/Login';
import Register from '../components/register/Register';

export default function AuthPage(props) {
    return (
        <div className={'auth-page'}>
            <Auth/>
            {
                props.path === 'login' ? <Login/> : <Register/>
            }
        </div>
    )
}