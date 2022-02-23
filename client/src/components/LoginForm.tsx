import React, {FC, useContext, useState} from 'react';
import "../styles/LoginForm.css";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    return (
        <div>
            <div className='box1'>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
            />
            <div className="ButtonLogin">
            <button className='reg' onClick={() => store.login(email, password)}>
                Логин
            </button>
            <button className='reg' onClick={() => store.registration(email, password)}>
                Регистрация
            </button>
            </div>
            </div>
        </div>
    );
};

export default observer(LoginForm);
