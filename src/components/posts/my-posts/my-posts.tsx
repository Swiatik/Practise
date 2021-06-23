import { connect } from "react-redux";
import Posts from "../posts";
import { getUserPosts } from '../../../redux/posts-reducer'
import React from "react";
import AddPost from './add-post'
import { PostType } from "../../../redux/types/types";
import { AppStateType } from "../../../redux/store";
import styles from './add-post.module.css'

type PropsType = {
    getUserPosts: (username: string) => void
    posts: Array<PostType>
    auth: string
}

class MyPosts extends React.Component<PropsType>{
    componentDidMount() {
        this.props.getUserPosts(this.props.auth);
    }

    render() {
        return (
            <div className={styles.page}>
                <AddPost />
                <Posts posts={this.props.posts} isDeleting={true} />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.posts.posts,
        auth: state.auth.auth.username
    }
}

export default connect(mapStateToProps, { getUserPosts })(MyPosts);