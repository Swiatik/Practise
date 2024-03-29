import styles from './account.module.css'
import userPhoto from '../../assets/user.png'
import PostsContainer from '../posts/postsContainer'
import { AccountType } from '../../redux/types/types'

type PropsType = {
    user: AccountType
}

const Account = (props: PropsType) =>
(
    <div>
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Profile</h1>
            </div>
            <div>
                <img src={props.user.profile_photo_url != null ?
                    props.user.profile_photo_url : userPhoto}
                    alt="user.png" className={styles.userPhoto} />
                <div className={styles.info}>
                    <h3>Username: {props.user.username}</h3>
                    <h3>Description: {props.user.description}</h3>
                    <h3>Full name: {props.user.first_name} {props.user.last_name}</h3>
                    <h3>Followers: {props.user.followers}</h3>
                    <h3>Following: {props.user.following}</h3>
                    <h3>Job title: {props.user.job_title}</h3>
                </div>
            </div>
        </div>
        <div>
            <div className={styles.header}>
                <h1>Posts</h1>
            </div>
            <PostsContainer username={props.user.username} />
        </div>
    </div>)


export default Account;