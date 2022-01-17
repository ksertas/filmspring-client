import axios from 'axios';
import React, { useContext, useState } from 'react'
import jwt_decode from 'jwt-decode';
import { useForm } from 'react-hook-form';
import { ax } from '../../api/api';
import { UserContext } from '../../context/UserContext';
import styles from './Login.module.scss';

export default function Login() {

    document.body.classList.add(styles.background);

    const { user, setUser } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const loginUser = async (data) => {
        try {
            const result = await axios.post("http://localhost:8080/api/users/login", data);
            window.localStorage.setItem("token", result.data.jwt);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.login__container}>
            <div className={styles.header__container}>
                <h2>Welcome back!</h2>
                <h3>Please login</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit(loginUser)} className={styles.login_form}>

                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" {...register("username", {
                        required: "Username must be between 3 and 32 characters long.", pattern: {
                            value: /^(?=.{3,32}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                            message: "Invalid username format."
                        }
                    })} />
                    {errors.username && <p className={styles.input__error_message}>{errors.username.message}</p>}

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password", {
                        required: "This field is required."
                    })} />
                    {errors.password && <p className={styles.input__error_message}>{errors.password.message}</p>}
                    <button type="submit" className={styles.login_btn}>Login</button>
                </form>
            </div>
        </div>
    )
}
