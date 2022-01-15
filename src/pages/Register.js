import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import styles from './Register.module.scss';
import { AiFillEye } from 'react-icons/ai';

export default function Register() {

    document.body.classList.add(styles.background);

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={styles.register__container}>
            <div className={styles.header__container}>
                <h2>Register account</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.register_form}>

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" {...register("username", {
                        required: "Username must be between 3 and 32 characters long.", pattern: {
                            value: /^(?=.{3,32}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                            message: "Invalid username format."
                        }
                    })} />
                    {errors.username && <p className={styles.input__error_message}>{errors.username.message}</p>}

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
                </form>
            </div>
        </div>
    )
}
