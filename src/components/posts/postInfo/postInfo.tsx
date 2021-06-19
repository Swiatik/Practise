import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import withLayout from "../../../hoc/withLayout";
import CommentsContainer from "../../comments/comment";
import Post from "../post/post";
import {getPost, getComments} from '../../../redux/posts-reducer'

const PostInfo = (props: any)=>{
return (
    <div>
        <Post post={props.post} />
        <CommentsContainer comments={props.comments}/>
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
    comments: any
}


class PostsInfoContainer extends React.Component<PropsType>{
    constructor(props: PropsType){
        super(props);          
        debugger;
        this.props.getPost(this.props.match.params.post_id);
        this.props.getComments(this.props.match.params.post_id);
    }

    render(){
        
        return <PostInfo post={this.props.post} comments={this.props.comments}/>
        
    }    
}

let mapStateToProps = (state: any) => {
    return {
        post: state.posts.post,
        comments: state.posts.comments
    }
}

export default connect(mapStateToProps, {getPost, getComments})(withLayout(withRouter(PostsInfoContainer)));
// export default withLayout(PostInfo);