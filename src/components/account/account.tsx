import { FunctionComponent } from 'react';
import styles from './account.module.css'
import { connect } from 'react-redux';
import Header from '../header/header';
import Menu from '../menu/menu';
import { withRouter } from 'react-router';
import { getUserProfile } from '../../redux/profiles-reducer'
import userPhoto from '../../assets/user.png'
interface ProfileProps {
    user: any
}

const Account: FunctionComponent<ProfileProps> = (props: ProfileProps) =>
    <div className={styles.app_wrapper}>
        <Header />
        <Menu />
        <div className={styles.app_wrapper_content}>
            <img src={props.user.profile_photo_url != null ? 
                        props.user.profile_photo_url : userPhoto} 
                 alt="user.png"  className={styles.userPhoto}/>
            <h3>Username: {props.user.username}</h3>
            <h3>Description: {props.user.description}</h3>
            <h3>First name: {props.user.first_name}</h3>
            <h3>Followers: {props.user.followers}</h3>
            <h3>Following: {props.user.following}</h3>
            <h3>Job title: {props.user.job_title}</h3>
            <h3>Last name: {props.user.last_name}</h3>
        </div>
    </div>


let AccountContainer = (props: any) =>{    
    if(props.match.params.username){
        props.getUserProfile(props.match.params.username);
        return <Account user={props.user} />
    }
    else 
        return <Account user={props.auth} />
}

let ACRoute = withRouter(AccountContainer)

let mapStateToProps = (state: any) => {
    return {
        auth: state.profiles.auth,
        user: state.profiles.user,        
    }
}

export default connect(mapStateToProps, {getUserProfile})(ACRoute);