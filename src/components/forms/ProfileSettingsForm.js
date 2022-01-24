import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ax } from '../../api/api';
import { UserContext } from '../../context/UserContext';
import styles from './ProfileSettingsForm.module.scss';

export default function ProfileSettingsForm() {

    const { user, setUser } = useContext(UserContext);

    const { register: registerPInfo, handleSubmit: submitPInfo, formState: { errors: errorsPINFO }, reset } = useForm();
    const { handleSubmit: submitAvatar } = useForm();
    const [selectedFile, setSelectedFile] = useState(null);
    const [profileDetails, setProfileDetails] = useState();
    const [uploadAvatarStatus, setUploadAvatarStatus] = useState(null);

    const onSubmit = async (data) => {
        try {
            let res = await ax.patch(`/users/${user.username}/account`, data);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        async function getProfileDetails() {
            try {
                let res = await ax.get(`/users/${user.username}`);
                setProfileDetails(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        getProfileDetails();
    }, []);

    useEffect(() => {
        if (profileDetails) {
            reset({
                firstName: profileDetails.firstName,
                lastName: profileDetails.lastName,
                bio: profileDetails.bio,
                hideMediaPreference: profileDetails.hideMediaFromOthers,
            })
        }
    }, [profileDetails]);

    const onFileUpload = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    useEffect(() => {
        prepareUploadAvatar();
    }, [selectedFile]);

    const prepareUploadAvatar = () => {
        if (selectedFile === null) {
            return;
        }
        else {
            uploadAvatar();
        }
    }

    const uploadAvatar = async () => {
        const formData = new FormData();
        formData.append(
            "file",
            selectedFile
        )

        try {
            let res = await ax.put(`/avatars/users/${user.username}?file`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            let avatar = res.data;
            console.log(avatar);
            localStorage.setItem("avatarSrc", `data:${avatar.type};base64,${avatar.data}`);
            setUser({
                ...user,
                avatarSrc: localStorage.getItem("avatarSrc")
            })

            setUploadAvatarStatus(res.status);
        } catch (e) {
            console.log(e);
            setUploadAvatarStatus("error");
        }
    }

    return (
        <div className={styles.profile__container}>
            <header>
                <h4>Profile settings</h4>
            </header>
            <div className={styles.profile_settings_wrapper}>
                <form onSubmit={submitPInfo(onSubmit)} className={styles.profile_personal}>

                    <label htmlFor="first_name">First name</label>
                    <input type="text" id="first_name" {...registerPInfo("firstName", {
                        minLength: { value: 2, message: "Must be at least 2 characters long." },
                        required: "This field is required", pattern: {
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

                    <div className={styles.options__container}>
                        <label htmlFor="hideMedia">Make my films and series lists private</label>
                        <input type="checkbox" name="hideMedia" id="hideMedia" {...registerPInfo("hideMediaPreference")} />
                    </div>

                    <button type="submit" className={styles.save_btn}>Save</button>
                </form>
                <form onSubmit={submitAvatar(onSubmit)} className={styles.profile_avatar}>
                    <div className={styles.avatar__top}>
                        <p>Change profile picture</p>
                        <img src={user.avatarSrc} alt="current avatar" />
                    </div>
                    <div className={styles.avatar__bottom}>
                        {uploadAvatarStatus === "error" ? <p className={styles.avatar_fail}>Incorrect file size or format</p> : ''}
                        <label htmlFor="avatar" className={styles.upload_btn}>Choose image to upload</label>
                        <input type="file" name="avatar" id="avatar" accept=".png, .jpeg, .jpg" onChange={onFileUpload} />
                        <p className={styles.file_info}>File types: .png, .jpeg. Max file size: 5MB</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
