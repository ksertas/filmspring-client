import React from 'react'
import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';

export default function Login() {

    document.body.classList.add(styles.background);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={styles.login__container}>
            <div className={styles.header__container}>
                <h2>Welcome back!</h2>
                <h3>Please login</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>

                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" {...register("email", {
                        required: "This field is required.", pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Invalid email format."
                        }
                    })} />
                    {errors.email && <p className={styles.input__error_message}>{errors.email.message}</p>}

                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" {...register("password", {
                        required: "This field is required."
                    })} />
                    {errors.password && <p className={styles.input__error_message}>{errors.password.message}</p>}
                    <button type="submit" className={styles.login_btn}>Login</button>
                </form>
            </div>
        </div>
    )
}
