import React, { useState } from 'react'
import styles from './CreateGroup.module.scss';
import Subheader from '../media/Subheader.js';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { AiOutlinePlus, AiOutlineArrowRight } from 'react-icons/ai';
import { ax } from '../../api/api';

export default function CreateGroup({ containerTitle, ctaTitle }) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            let result = await ax.post(`/groups`, data);
            setModalIsOpen(false);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }
    Modal.setAppElement("#root");

    return (
        <div className={styles.group__container}>
            <header className={styles.title}>
                {containerTitle ? <h4>{containerTitle}</h4> : <h4>Your groups</h4>}
                <div>
                    <button className={styles.header__button} onClick={() => setModalIsOpen(!modalIsOpen)}><AiOutlinePlus />Create group</button>
                </div>
            </header>
            <div className={styles.content__container}>
                <p className={styles.content__title}>{ctaTitle}</p>
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
                                value: /^(?=.{4,32}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                                message: "Invalid name format."
                            }
                        })} />
                        {errors.groupName && <p className={styles.input__error_message}>{errors.groupName.message}</p>}
                        <button type="submit"><AiOutlineArrowRight />Create group</button>
                    </form>
                </Modal>
            </div>
        </div>
    )
}
