import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import postPhoto from '../../../assets/post.png'
import userPhoto from '../../../assets/user.png'
import styles from './post.module.css'
import { like, unlike, deletePost } from '../../../redux/posts-reducer'
import { PostPhotoType } from '../../../redux/types/types';

type PropsType = {
    like: (id: number) => void
    unlike: (id: number) => void
    deletePost: (id: number) => void
    post: any,
    isDeleting?: boolean
}

type StateType = {
    isLiked: boolean,
    likesCount: number,
}

class Post extends React.Component<PropsType, StateType>{
    onLike = () => {
        this.props.like(this.props.post.id);
    }

    onUnlike = () => {
        this.props.unlike(this.props.post.id);
    }

    onDelete = () => {
        this.props.deletePost(this.props.post.id);
    }

    render() {
        return (
            <div className={styles.post}>
                <div>
                     <div className={styles.author}>
                            <NavLink to={`/posts/${this.props.post.id}/comments`}>
                                <img src={this.props.post.author && this.props.post.author.profile_photo_url ? this.props.post.author.profile_photo_url : userPhoto}
                                    alt="user.png" className={styles.userPhoto}/>
                            </NavLink>
                            {this.props.post.author && this.props.post.author.username}
                        </div>                    
                    <div>
                        <NavLink to={`/posts/${this.props.post.id}/comments`}>                            
                                <img src={this.props.post.photos.length ? this.props.post.photos[0].url : postPhoto} alt="post.png" className={styles.postPhoto} />                            
                        </NavLink>
                    </div>
                    <div className={styles.info}>
                        <div>Description: {this.props.post.description}</div>
                        <div className={styles.likes}>
                            <div>{this.props.post.is_liked ?
                                <button className={styles.button} onClick={this.onUnlike}>
                                    Unlike
                                </button> :
                                <button className={styles.button} onClick={this.onLike}>
                                    Like
                                </button>}
                            </div>

                            {this.props.post.likes_count} likes

                        </div>
                        <div>Created: {this.props.post.created_at}</div>
                    </div>
                </div>
                <div>
                    {this.props.isDeleting &&
                        <button onClick={this.onDelete}>
                            Delete
                        </button>}
                </div>
            </div>
        )
    }
}


export default connect(null, { like, unlike, deletePost })(Post);