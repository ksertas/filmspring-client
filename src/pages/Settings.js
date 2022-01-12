// Username, Bio, Email inputs will have default values of current user's from API.

import React from 'react'
import styles from './Settings.module.scss';
import List from '../components/Carousel/List.js';
import Button from '../components/button/button.js';
import { useForm } from 'react-hook-form';
import John from '../assets/img/home/john.png';

export default function Settings() {

    document.body.classList.add(styles.background);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            "firstName": "John",
            "lastName": "Doe",
            "hideMedia": true,
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={styles.settings__container}>
            <div className={styles.header}>
                <h2>Account settings</h2>
            </div>
            <List title="Profile settings">
                <div className={styles.profile__container}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.profile_personal}>

                        <label htmlFor="first_name">First name</label>
                        <input type="text" id="first_name" {...register("firstName", {
                            required: false, pattern: {
                                value: /^[a-z ,.'-]+$/i,
                                message: "Name contains illegal characters"
                            }
                        })} />
                        {errors.firstName && <p className={styles.input__error_message}>{errors.firstName.message}</p>}

                        <label htmlFor="last_name">Last name</label>
                        <input type="text" id="last_name" {...register("lastName", {
                            required: false, pattern: {
                                value: /^[a-z ,.'-]+$/i,
                                message: "Name contains illegal characters"
                            }
                        })} />
                        {errors.lastName && <p className={styles.input__error_message}>{errors.lastName.message}</p>}

                        <label htmlFor="new_bio">About yourself</label>
                        <textarea maxLength={150} type="text" id="new_bio" {...register("bio", { maxLength: { value: 150, message: "Bio must not exceed 150 characters" } })}></textarea>
                        {errors.bio && <p className={styles.input__error_message}>{errors.bio.message}</p>}

                        <Button type="submit" filled primary>Save</Button>
                    </form>

                    <form action="" className={styles.profile_avatar}>
                        <div className={styles.avatar__top}>
                            <p>Change profile picture</p>
                            <img src={John} alt="" />
                        </div>
                        <div className={styles.avatar__bottom}>
                            <label htmlFor="avatar" className={styles.upload_btn}>Choose image to upload</label>
                            <input type="file" name="avatar" id="avatar" onChange={() => console.log("submitted")} />
                            <p className={styles.file_info}>File types: .png, .jpeg. Max file size: 5MB</p>
                        </div>
                    </form>
                </div>
            </List>
            <List title="Account settings">
                <div className={styles.account__container}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.account_email}>

                        <h4>Change email</h4>

                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" {...register("email", {
                            required: false, pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Invalid email format."
                            }
                        })} />
                        {errors.email && <p className={styles.input__error_message}>{errors.email.message}</p>}
                        <Button type="submit" filled primary>Save</Button>
                    </form>
                    <form action="" className={styles.account_password}>
                        <h4>Change password</h4>

                        <label htmlFor="old_password">Old password</label>
                        <input type="password" id="old_password" {...register("oldPassword", {
                            required: "This field is required."
                        })} />
                        {errors.oldPassword && <p className={styles.input__error_message}>{errors.oldPassword.message}</p>}

                        <label htmlFor="new_password">New password</label>
                        <input type="password" id="new_password" {...register("newPassword", {
                            required: "This field is required."
                        })} />
                        {errors.newPassword && <p className={styles.input__error_message}>{errors.newPassword.message}</p>}
                        <Button type="submit" filled primary>Save</Button>
                    </form>
                    <form action="" className={styles.account_deletion}>
                        <h4>Delete account</h4>

                        <label htmlFor="old_password">Password</label>
                        <input type="password" id="password" {...register("password", {
                            required: "This field is required."
                        })} />
                        {errors.password && <p className={styles.input__error_message}>{errors.password.message}</p>}
                        <Button type="submit" filled id="delete_btn">Delete account</Button>
                    </form>
                </div>
            </List>
            <List title="Privacy settings">
                <div className={styles.privacy__container}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.privacy_media}>

                        <div className={styles.options__container}>
                            <label htmlFor="hideMedia">Make my films and series lists private</label>
                            <input type="checkbox" name="hideMedia" id="hideMedia" {...register("hideMedia")} />
                        </div>
                        <Button type="submit" filled primary>Save</Button>

                    </form>
                </div>
            </List>
        </div>
    )
}
