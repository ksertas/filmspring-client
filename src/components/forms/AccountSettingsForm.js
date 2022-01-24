import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal/lib/components/Modal';
import { useNavigate } from 'react-router-dom';
import { ax } from '../../api/api';
import { UserContext } from '../../context/UserContext';
import styles from './AccountSettingsForm.module.scss';

export default function AccountSettingsForm() {

    const { user, logout } = useContext(UserContext);

    let navigate = useNavigate();
    const [accountDetails, setAccountDetails] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const { register: registerEmail, handleSubmit: submitEmail, formState: { errors: errorsEmail }, reset } = useForm();
    const { register: registerPassword, handleSubmit: submitPassword, formState: { errors: errorsPassword } } = useForm();
    const { register: registerDeletion, handleSubmit: submitDeletion, formState: { errors: errorsDeletion } } = useForm();

    useEffect(() => {
        async function getAccountDetails() {
            try {
                let res = await ax.get(`/users/${user.username}`);
                setAccountDetails(res.data);
            } catch (e) {
                console.log(e);
            }
        }

        getAccountDetails();
    }, []);

    useEffect(() => {
        if (accountDetails) {
            reset({
                email: accountDetails.email,
            })
        }
    }, [accountDetails]);



    const onSubmit = async (data) => {
        try {
            let res = await ax.patch(`/users/${user.username}/account`, data);
            window.location.reload();
            setInvalidPassword(false);
        } catch (e) {
            if (e.response.status === 401) {
                setInvalidPassword(true);
            }
            console.log(e);
        }
    }

    const handleDeletion = async (data) => {
        try {
            let res = await ax.post(`/users/${user.username}/account`, data);
            if (res.status === 204) {
                logout();
                window.scrollTo(0, 0);
                navigate("/");
            }
        } catch (e) {
            if (e.response.status === 401) {
                setInvalidPassword(true);
            }
            console.log(e)
        }
    }

    return (
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
                        required: "This field is required.",
                        minLength: { value: 8, message: "Password must be at least 8 characters long." },
                        maxLength: { value: 32, message: "Password must be 32 characters or shorter." }
                    })} />
                    {errorsPassword.oldPassword && <p className={styles.input__error_message}>{errorsPassword.oldPassword.message}</p>}
                    {invalidPassword && <p className={styles.input__error_message}>Incorrect password, please try again.</p>}

                    <label htmlFor="new_password">New password</label>
                    <input type="password" id="new_password" {...registerPassword("newPassword", {
                        required: "This field is required.",
                        minLength: { value: 8, message: "Password must be at least 8 characters long." },
                        maxLength: { value: 32, message: "Password must be 32 characters or shorter." }
                    })} />
                    {errorsPassword.newPassword && <p className={styles.input__error_message}>{errorsPassword.newPassword.message}</p>}
                    <button type="submit" className={styles.save_btn}>Save</button>
                </form>
                <div className={styles.account_deletion}>
                    <h4>Delete account</h4>
                    <button onClick={() => setModalIsOpen(true)}>Delete account</button>
                    <Modal
                        isOpen={modalIsOpen}
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

                            <form onSubmit={submitDeletion(handleDeletion)} className={styles.modal__delete_form}>
                                <label htmlFor="old_password">Password</label>
                                <input type="password" id="password" {...registerDeletion("password", {
                                    required: "This field is required.",
                                    minLength: { value: 8, message: "Password must be at least 8 characters long." },
                                    maxLength: { value: 32, message: "Password must be 32 characters or shorter." }
                                })} />
                                {errorsDeletion.password && <p className={styles.input__error_message}>{errorsDeletion.password.message}</p>}
                                {invalidPassword && <p className={styles.input__error_message}>Incorrect password, please try again.</p>}
                                <div className={styles.modal__btn_container}>
                                    <button onClick={() => setModalIsOpen(false)} className={styles.modal__cancel_btn}>Cancel</button>
                                    <button type="submit" className={styles.modal__delete_btn}>Delete account permanently</button>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
