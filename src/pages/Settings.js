// Username, Bio, Email inputs will have default values of current user's from API.

import React from 'react'
import styles from './Settings.module.scss';
import List from '../components/Carousel/List.js';
import Button from '../components/button/button.js';
import { useForm } from 'react-hook-form';
import John from '../assets/img/home/john.png';

export default function Settings() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            "firstName": "John",
            "lastName": "Doe",
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
                <div className={styles.settings__profile}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.settings__profile_personal}>

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

                    <form action="" className={styles.settings__profile_avatar}>
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
        </div>
    )
}
