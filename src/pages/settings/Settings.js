import React from 'react';
import Modal from 'react-modal';
import AccountSettingsForm from '../../components/forms/AccountSettingsForm';
import ProfileSettingsForm from '../../components/forms/ProfileSettingsForm';
import styles from './Settings.module.scss';

export default function Settings() {

    document.body.classList.add(styles.background);
    Modal.setAppElement("#root");

    return (
        <div className={styles.settings__container}>
            <div className={styles.header}>
                <h2>Account settings</h2>
            </div>
            <ProfileSettingsForm />
            <AccountSettingsForm />
        </div>
    )
}
