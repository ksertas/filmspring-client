import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import styles from './Register.module.scss';
import { AiFillEye } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    document.body.classList.add(styles.background);

    let navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState(false);
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = async (data) => {
        try {
            let res = await axios.post("http://localhost:8080/api/users", data);
            setRegisterError(false);
            if (res.status === 201) {
                navigate("/login");
            }
        } catch (e) {
            setRegisterError(true);
            console.log(e);
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("emailCta")) {
            reset({
                email: sessionStorage.getItem("emailCta")
            })
        }
    }, []);


    return (
        <div className={styles.register__container}>
            <div className={styles.header__container}>
                <h2>Register account</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.register_form}>
                    {registerError ? <p className={styles.register_error}>Something went wrong while creating your account. Please try again.</p> : ''}
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" {...register("username", {
                            required: "Username must be between 3 and 32 characters long.", pattern: {
                                value: /^(?=.{3,32}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                                message: "Invalid username format."
                            }
                        })} />
                        {errors.username && <p className={styles.input__error_message}>{errors.username.message}</p>}

                        <label htmlFor="firstName">First name</label>
                        <input type="text" name="firstName" id="firstName" {...register("firstName", {
                            required: "This field is required.",
                            minLength: { value: 1, message: "First name must contain at least one letter." },
                            maxLength: { value: 24, message: "First name can't be longer than 24 characters." }
                        })} />
                        {errors.firstName && <p className={styles.input__error_message}>{errors.firstName.message}</p>}

                        <label htmlFor="lastName">Last name <span className={styles.optional}>Optional</span></label>
                        <input type="text" name="lastName" id="lastName" {...register("lastName", {
                            maxLength: { value: 24, message: "Last name can't be longer than 24 characters." }
                        })} />
                        {errors.lastName && <p className={styles.input__error_message}>{errors.lastName.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" {...register("email", {
                            required: "This field is required.", pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Invalid email format."
                            }
                        })} />
                        {errors.email && <p className={styles.input__error_message}>{errors.email.message}</p>}

                        <div className={styles.password_div}>
                            <label htmlFor="password">Password</label>
                            <input type={showPassword ? "text" : "password"} id="password" {...register("password", {
                                required: "This field is required."
                            })
                            } />
                            <AiFillEye onClick={() => setShowPassword(!showPassword)} />
                        </div>
                        {errors.password && <p className={styles.input__error_message}>{errors.password.message}</p>}

                        <div className={styles.password_div}>
                            <label htmlFor="password_repeat">Repeat password</label>
                            <input type={showPassword ? "text" : "password"} id="password_repeat"{...register("password_repeat", {
                                required: "This field is required.",
                                validate: value => {
                                    return value === password.current || "Passwords do not match";
                                }
                            })
                            } />
                            <AiFillEye onClick={() => setShowPassword(!showPassword)} />
                        </div>
                        {errors.password_repeat && <p className={styles.input__error_message}>{errors.password_repeat.message}</p>}
                        <button type="submit" className={styles.register_btn}>Register account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
