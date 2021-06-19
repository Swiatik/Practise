import { NavLink } from 'react-router-dom';
import postPhoto from '../../../assets/post.png'
import styles from './post.module.css'

const Post = (props: any) => {
    // console.log(props);
    // debugger;
    return (
        <div>
            <div>
                <NavLink to={`/posts/${props.post.id}/comments`}>
                    <img src={props.post.photos[1] != null ? props.post.photos[1].url : postPhoto}
                        alt="post.png" className={styles.userPhoto} />
                </NavLink>
            </div>
            <span>
                <span>
                    <div>{props.post.username}</div>
                    <div>Descripropstion: {props.post.descripropstion}</div>
                    <div>{props.post.likes_count} likes</div>
                    <div>Created: {props.post.created_at}</div>
                    <div>{props.post.is_liked !== false ? "Liked" : "Like"}</div>
                </span>
            </span>
        </div>
    )
}

export default Post;