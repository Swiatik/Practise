import { connect } from "react-redux";
import Posts from "../posts";
import { getUserPosts } from '../../../redux/posts-reducer'
import React from "react";
import AddPost from './add-post'

type PropsType = {
    getUserPosts: any,
    posts: any,
    auth: any
}

class MyPosts extends React.Component<PropsType>{
    componentDidMount() {
        this.props.getUserPosts(this.props.auth);
    }

    render() {
        return (
            <div>
                <AddPost />
                <Posts posts={this.props.posts} isDeleting={true} />
            </div>
        )
    }
}

let mapStateToProps = (state: any) => {
    return {
        posts: state.posts.posts,
        auth: state.auth.auth.username
    }
}

export default connect(mapStateToProps, { getUserPosts })(MyPosts);