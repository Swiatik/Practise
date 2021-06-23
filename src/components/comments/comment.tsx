import React from "react";
import { connect } from "react-redux";
import { addComment } from "../../redux/posts-reducer";
import { CommentType } from "../../redux/types/types";
import userPhoto from '../../assets/user.png'
import styles from './comments.module.css'

type PropsType = {
    post_id: number
    addComment: (id: number, message: string) => void
    comments: Array<CommentType>
}

type CommentState = {  
    message: string
}

class Comments extends React.Component<PropsType, CommentState>{
    state = {
        message: ""
    }

    onInputChange = (e: any) => {                
        e.preventDefault()
        this.setState({ message: e.currentTarget.value });
    };

    onSend = (): void => {      
        this.props.addComment(this.props.post_id, this.state.message);
        this.setState({
            message: ""
        });
      }

    render() {
        return (
            <div>
                <div className={styles.add_container}>
                    <h1>Add comment</h1>
                    <textarea value={this.state.message} 
                              onChange={this.onInputChange}
                              placeholder="Enter comment"></textarea>
                </div>
                    <div className={styles.send}><button onClick={this.onSend}>Send</button></div>
                <div>
                    {this.props.comments.length && this.props.comments.map((c: CommentType) => (
                        <div key={c.id} className={styles.comment_container}>
                            <div>
                                <img src={c.commenter.profile_photo_url ? c.commenter.profile_photo_url : userPhoto} 
                                    alt="user.png"
                                    className={styles.userPhoto}/>
                                <div>{c.commenter.username}: {c.message}</div>                                
                            </div>
                            <div>{c.created_at}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default connect(null, { addComment })(Comments);