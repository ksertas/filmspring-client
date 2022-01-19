// Username, Bio, Email inputs will have default values of current user's from API.

import React, { useState } from 'react'
import styles from './Settings.module.scss';
import List from '../../components/Carousel/List.js';
import { useForm } from 'react-hook-form';
import John from '../../assets/img/home/john.png';
import Modal from 'react-modal';

export default function Settings() {

    document.body.classList.add(styles.background);
    Modal.setAppElement("#root");


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { register: registerPInfo, handleSubmit: submitPInfo, formState: { errors: errorsPINFO } } = useForm({
        defaultValues: {
            "firstName": "John",
            "lastName": "Doe",
        }
    });

    const { handleSubmit: submitAvatar } = useForm();
    const { register: registerEmail, handleSubmit: submitEmail, formState: { errors: errorsEmail } } = useForm();
    const { register: registerPassword, handleSubmit: submitPassword, formState: { errors: errorsPassword } } = useForm();
    const { register: registerDeletion, handleSubmit: submitDeletion, formState: { errors: errorsDeletion } } = useForm();
    const { register: registerPrivacy, handleSubmit: submitPrivacy } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    const onSubmitAccountDeletion = (data) => {
        console.log(data);
        setModalIsOpen(true);
    }

    const handleDeletion = () => {
        console.log("Account deleted.")
        setModalIsOpen(false)
    }

    return (

        // <div>
        //     <header>
        //         <h4></h4>
        //         <button></button>
        //     </header>
        //     <div></div>
        // </div>

        <div className={styles.settings__container}>
            <div className={styles.header}>
                <h2>Account settings</h2>
            </div>
            <div className={styles.profile__container}>
                <header>
                    <h4>Profile settings</h4>
                </header>
                <div className={styles.profile_settings_wrapper}>
                    <form onSubmit={submitPInfo(onSubmit)} className={styles.profile_personal}>

                        <label htmlFor="first_name">First name</label>
                        <input type="text" id="first_name" {...registerPInfo("firstName", {
                            minLength: { value: 2, message: "Must be at least 2 characters long." },
                            required: false, pattern: {
                                value: /^[a-z ,.'-]+$/i,
                                message: "Name contains illegal characters"
                            }
                        })} />
                        {errorsPINFO.firstName && <p className={styles.input__error_message}>{errorsPINFO.firstName.message}</p>}

                        <label htmlFor="last_name">Last name</label>
                        <input type="text" id="last_name" {...registerPInfo("lastName", {
                            minLength: { value: 2, message: "Must be at least 2 characters long." },
                            required: false, pattern: {
                                value: /^[a-z ,.'-]+$/i,
                                message: "Name contains illegal characters"
                            }
                        })} />
                        {errorsPINFO.lastName && <p className={styles.input__error_message}>{errorsPINFO.lastName.message}</p>}

                        <label htmlFor="new_bio">About yourself</label>
                        <textarea maxLength={150} type="text" id="new_bio" {...registerPInfo("bio", { maxLength: { value: 150, message: "Bio must not exceed 150 characters" } })}></textarea>
                        {errorsPINFO.bio && <p className={styles.input__error_message}>{errorsPINFO.bio.message}</p>}

                        <button type="submit" className={styles.save_btn}>Save</button>
                    </form>
                    <form onSubmit={submitAvatar(onSubmit)} className={styles.profile_avatar}>
                        <div className={styles.avatar__top}>
                            <p>Change profile picture</p>
                            <img src={John} alt="" />
                        </div>
                        <div className={styles.avatar__bottom}>
                            <label htmlFor="avatar" className={styles.upload_btn}>Choose image to upload</label>
                            <input type="file" name="avatar" id="avatar" accept=".png, .jpeg, .jpg" onChange={() => console.log("submitted")} />
                            <p className={styles.file_info}>File types: .png, .jpeg. Max file size: 5MB</p>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.account__container}>
                <header>
                    <h4>Account settings</h4>
                </header>
                <div className={styles.account_settings_wrapper}>
                    <form onSubmit={submitEmail(onSubmit)} className={styles.account_email}>

                        <h4>Change email</h4>

                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" {...registerEmail("email", {
                            required: "This field is required.", pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Invalid email format."
                            }
                        })} />
                        {errorsEmail.email && <p className={styles.input__error_message}>{errorsEmail.email.message}</p>}
                        <button type="submit" className={styles.save_btn}>Save</button>
                    </form>
                    <form onSubmit={submitPassword(onSubmit)} className={styles.account_password}>
                        <h4>Change password</h4>

                        <label htmlFor="old_password">Old password</label>
                        <input type="password" id="old_password" {...registerPassword("oldPassword", {
                            required: "This field is required."
                        })} />
                        {errorsPassword.oldPassword && <p className={styles.input__error_message}>{errorsPassword.oldPassword.message}</p>}

                        <label htmlFor="new_password">New password</label>
                        <input type="password" id="new_password" {...registerPassword("newPassword", {
                            required: "This field is required."
                        })} />
                        {errorsPassword.newPassword && <p className={styles.input__error_message}>{errorsPassword.newPassword.message}</p>}
                        <button type="submit" className={styles.save_btn}>Save</button>
                    </form>
                    <form onSubmit={submitDeletion(onSubmitAccountDeletion)} className={styles.account_deletion}>
                        <h4>Delete account</h4>

                        <label htmlFor="old_password">Password</label>
                        <input type="password" id="password" {...registerDeletion("password", {
                            required: "This field is required."
                        })} />
                        {errorsDeletion.password && <p className={styles.input__error_message}>{errorsDeletion.password.message}</p>}
                        <button type="submit">Delete account</button>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={
                                {
                                    overlay: {
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    },
                                    content: {
                                        backgroundColor: '#2E2B29',
                                        width: '60%',
                                        height: 'fit-content',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        margin: 'auto',
                                    }
                                }
                            }>
                            <div className={styles.modal__container}>
                                <h4 className={styles.modal__header}>Account deletion</h4>
                                <p className={styles.modal__description}>Account deletion is permanent and cannot be undone. Are you sure you want to continue?</p>
                                <div className={styles.modal__btn_container}>
                                    <button onClick={() => setModalIsOpen(false)} className={styles.modal__cancel_btn}>Cancel</button>
                                    <button onClick={handleDeletion} className={styles.modal__delete_btn}>Delete account permanently</button>
                                </div>
                            </div>
                        </Modal>
                    </form>
                </div>
            </div>
            <div className={styles.privacy__container}>
                <header>
                    <h4>Privacy settings</h4>
                </header>
                <div className={styles.privacy_settings_wrapper}>
                    <form onSubmit={submitPrivacy(onSubmit)} className={styles.privacy_media}>

                        <div className={styles.options__container}>
                            <label htmlFor="hideMedia">Make my films and series lists private</label>
                            <input type="checkbox" name="hideMedia" id="hideMedia" {...registerPrivacy("hideMedia")} />
                        </div>
                        <button type="submit" className={styles.save_btn}>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
