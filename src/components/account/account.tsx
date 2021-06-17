import { FunctionComponent } from 'react';
import styles from './account.module.css'
import { connect } from 'react-redux';
import Menu from './menu/menu';
import Header from './header/header';

interface ProfileProps {
    user: any
}

const Account: FunctionComponent<ProfileProps> = (props: ProfileProps) =>
    <div className={styles.app_wrapper}>
        <Header />
        <Menu />
        <div className={styles.app_wrapper_content}>
            <h3>Profile photo url: {props.user.profile_photo_url}</h3>
            <h3>Username: {props.user.username}</h3>
            <h3>Description: {props.user.description}</h3>
            <h3>First name: {props.user.first_name}</h3>
            <h3>Followers: {props.user.followers}</h3>
            <h3>Following: {props.user.following}</h3>
            <h3>Job title: {props.user.job_title}</h3>
            <h3>Last name: {props.user.last_name}</h3>
        </div>
    </div>



let mapStateToProps = (state: any) => {
    return {
        user: state.account.user
    }
}

export default connect(mapStateToProps, null)(Account);