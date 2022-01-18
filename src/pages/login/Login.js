import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { UserContext } from '../../context/UserContext';
import styles from './Login.module.scss';
import ConvertDataToImg from '../../utils/ConvertDataToImg';
import { ax } from '../../api/api';
import jwt_decode from 'jwt-decode';
import IsAuthenticated from '../../utils/IsAuthenticated';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {

    document.body.classList.add(styles.background);

    const { login } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        loginUser(data);
    }

    const loginUser = async (data) => {
        try {
            const result = await axios.post("http://localhost:8080/api/users/login", data);
            login(result.data.jwt);
            navigate("/profile");
        } catch (e) {
            console.log(e.response);
        }
    }

    return (
        <div className={styles.login__container}>
            <div className={styles.header__container}>
                <h2>Welcome back!</h2>
                <h3>Please login</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>

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
        </div >
    )
}
