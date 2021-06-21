import styles from '../account.module.css'
import userPhoto from '../../../assets/user.png'
import React from 'react';
import { connect } from 'react-redux';
import withLayout from '../../../hoc/withLayout'
import { editProfile } from '../../../redux/profiles-reducer';
import { compose } from '@reduxjs/toolkit';
import { AppStateType } from '../../../redux/store';
import { AccountType } from '../../../redux/types/types';

type PropsType = {
    user: AccountType
    editProfile: (account: AccountType) => void
}

type StateType = {
    editMode: boolean,
    description: string,
    username: string,
    first_name: string,
    last_name: string,
    job_title: string
}

class MyAccount extends React.Component<PropsType, StateType>{
    state = {
        editMode: false,
        description: this.props.user.description || "",
        username: this.props.user.username || "",
        first_name: this.props.user.first_name || "",
        last_name: this.props.user.last_name || "",
        job_title: this.props.user.job_title || ""
    }

    onEdit = () => {
        this.setState({
            editMode: true
        });
    }

    onBack = () =>{
        this.setState({
            editMode: false
        });
    }

    onSave = () => {
        this.setState({
            editMode: false
        });

        let account: AccountType = {
            description: this.state.description,
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            job_title: this.state.job_title,
            email: this.props.user.email,
            followers: this.props.user.followers,
            following: this.props.user.following,
            profile_photo_url: this.props.user.profile_photo_url
        };

        console.log(account);

        this.props.editProfile(account);
    }

    onDescriptionChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            description: e.currentTarget.value
        });
    }
    onUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            username: e.currentTarget.value
        });
    }
    onFirstNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            first_name: e.currentTarget.value
        });
    }
    onLastNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            last_name: e.currentTarget.value
        });
    }
    onJobTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            job_title: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: PropsType) {
        if (prevProps.user.username !== this.props.user.username) {
            this.setState({
                username: this.props.user.username
            });
        }
        if (prevProps.user.description !== this.props.user.description) {
            this.setState({
                description: this.props.user.description
            });
        }
        if (prevProps.user.first_name !== this.props.user.first_name) {
            this.setState({
                first_name: this.props.user.first_name
            });
        }
        if (prevProps.user.last_name !== this.props.user.last_name) {
            this.setState({
                last_name: this.props.user.last_name
            });
        }
        if (prevProps.user.job_title !== this.props.user.job_title) {
            this.setState({
                job_title: this.props.user.job_title
            });
        }

    }

    render() {
        return (
            this.state.editMode ?
                <div>
                    <div className={styles.container}>
                        <div className={styles.change}>
                            <div className={styles.name}>Username: </div>
                            <input
                                type="Input"
                                value={this.state.username}                                
                                onChange={this.onUsernameChange} />
                        </div>
                        <div className={styles.change}>
                            <div className={styles.name}>Description: </div>
                            <input
                                value={this.state.description}                                
                                onChange={this.onDescriptionChange} />
                        </div>
                        <div className={styles.change}>
                            <div className={styles.name}>First name: </div>
                            <input
                                value={this.state.first_name}                                
                                onChange={this.onFirstNameChange} />
                        </div>
                        <div className={styles.change}>
                            <div className={styles.name}>Job title: </div>
                            <input
                                value={this.state.job_title}                                
                                onChange={this.onJobTitleChange} />
                        </div>
                        <div className={styles.change}>
                            <div className={styles.name}>Last name: </div>
                            <input
                                value={this.state.last_name}                                
                                onChange={this.onLastNameChange} />
                        </div>
                    </div>
                    <div>
                        <button onClick={this.onBack}>Back</button>
                        <button onClick={this.onSave}>Save profile</button>
                    </div>
                </div> :
                <div>
                    <img src={this.props.user.profile_photo_url != null ?
                        this.props.user.profile_photo_url : userPhoto}
                        alt="user.png" className={styles.userPhoto} />
                    <div>
                        <h3>Username: {this.props.user.username}</h3>
                        <h3>Email: {this.props.user.email}</h3>
                        <h3>Description: {this.props.user.description}</h3>
                        <h3>First name: {this.props.user.first_name}</h3>
                        <h3>Followers: {this.props.user.followers}</h3>
                        <h3>Following: {this.props.user.following}</h3>
                        <h3>Job title: {this.props.user.job_title}</h3>
                        <h3>Last name: {this.props.user.last_name}</h3>
                    </div>
                    <div>
                        <button>Add photo</button>
                        <button onClick={this.onEdit}>Edit profile</button>
                    </div>
                </div>)
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        user: state.auth.auth
    }
}

export default compose(
    withLayout,
    connect(mapStateToProps, { editProfile }),
)(MyAccount);