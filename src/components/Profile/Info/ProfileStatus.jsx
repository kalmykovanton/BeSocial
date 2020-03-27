import React from 'react';
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState( {
            editMode: true
        } );
    };

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        } );
        this.props.updateUserStatus(this.state.status);
    };

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if ( (prevProps.status !== this.props.status) && (this.props.status) )
            this.setState({
               status: this.props.status
            });
    }

    render() {
        return (
            <>
                {!this.state.editMode && <div>
                    <span onClick={ this.activateEditMode }
                          className={styles.text}>{this.state.status || '---------'} </span>
                </div>
                }
                {this.state.editMode && <div>
                    <input onChange={this.onStatusChange} onBlur={ this.deactivateEditMode }
                           autoFocus={true} value={this.state.status} />
                </div>
                }
            </>)
    };
}

export default ProfileStatus;