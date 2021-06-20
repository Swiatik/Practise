import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import withLayout from "../../../hoc/withLayout";
import Comments from "../../comments/comment";
import Post from "../post/post";
import {getComments} from '../../../redux/posts-reducer'
import { compose } from "@reduxjs/toolkit";

const PostInfo = (props: any)=>{
return (
    <div>
        <Post post={props.post} isDeleting={false}/>
        <Comments comments={props.comments} post_id={props.post.id} />
    </div>
)
}
type PathParamsType = {
    post_id: string,
}

type PropsType = RouteComponentProps<PathParamsType> & {    
    getPost: any,
    getComments: any,
    post: any,
    comments: any,    
}


class PostsInfoContainer extends React.Component<PropsType>{
    componentDidMount(){
        this.props.getComments(this.props.match.params.post_id);
    }

    render(){        
        return <PostInfo post={this.props.post} comments={this.props.comments} />
    }    
}

let mapStateToProps = (state: any) => {
    return {
        post: state.posts.post,
        comments: state.posts.comments
    }
}

export default compose(
    withLayout,
    connect(mapStateToProps, {getComments}),
    withRouter
)(PostsInfoContainer);