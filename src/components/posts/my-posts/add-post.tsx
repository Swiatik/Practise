import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../../redux/posts-reducer";
import styles from './add-post.module.css'

type PropsType = {
    createPost: any,
}

type DescriptionState = {
    description: string,
    photo: any
}

class AddPost extends React.Component<PropsType, DescriptionState>{
    state = {
        description: "",
        photo: null
    }

    onInputChange = (e: any) => {
        e.preventDefault()
        this.setState({ description: e.currentTarget.value });
    };

    onAddPhoto = (e: any) => {
        e.preventDefault()
        this.setState({ photo: e.currentTarget.value });
    }

    onSend = (): void => {         
        this.props.createPost(this.state.description, this.state.photo);
        this.setState({
            description: ""
        });
    }

    render() {
        return (
            <div className={styles.content_container}>
                <div className={styles.container}>
                    <h3>New Post</h3>
                    <div>
                        <textarea className={styles.textarea}
                            value={this.state.description}
                            onChange={this.onInputChange}
                            placeholder="Enter description" />
                    </div>
                    
                    <button className={styles.button} onClick={this.onSend}>Send</button>
                    
                </div>
            </div>
        )
    }
}
export default connect(null, { createPost })(AddPost);