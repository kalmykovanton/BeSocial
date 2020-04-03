import React, {useState, useEffect} from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMod = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    };

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <>
            {!editMode && <div>
                <span className={styles.text}
                      onClick={activateEditMod}>
                    {props.status || '---------'}
                </span>
            </div>
            }
            {editMode && <div>
                <input autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={status}/>
            </div>
            }
        </>)
};

export default ProfileStatus;