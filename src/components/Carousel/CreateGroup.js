import React, { useState } from 'react'
import styles from './CreateGroup.module.scss';
import Subheader from '../media/Subheader.js';
import { useForm } from 'react-hook-form';
import Button from '../button/button.js';
import Modal from 'react-modal';
import { AiOutlinePlus } from 'react-icons/ai';

export default function CreateGroup() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setModalIsOpen(false);
    }
    Modal.setAppElement("#root");

    return (
        <div className={styles.group__container}>
            <div className={styles.title}>
                <Subheader text="Your groups" />
                <button className={styles.header__button} onClick={() => setModalIsOpen(!modalIsOpen)}><AiOutlinePlus />Create group</button>
            </div>
            <div className={styles.content__container}>
                <p className={styles.content__title}>Create your first group!</p>
                <button className={styles.content__btn} onClick={() => setModalIsOpen(!modalIsOpen)}><AiOutlinePlus />Create your group</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={
                        {
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: '1000'
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
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.group_form}>
                        <label htmlFor="groupName">Group name</label>
                        <input type="text" name="groupName" id="groupName" {...register("groupName", {
                            required: "This field is required.",
                            pattern: {
                                value: /^(?=.{3,32}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                                message: "Invalid name format."
                            }
                        })} />
                        {errors.groupName && <p className={styles.input__error_message}>{errors.groupName.message}</p>}
                        <Button type="submit" filled primary>Create group</Button>
                    </form>
                </Modal>
            </div>
        </div>
    )
}
