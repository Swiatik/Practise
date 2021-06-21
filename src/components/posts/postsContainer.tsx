import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter} from "react-router";
import { getPosts } from "../../redux/posts-reducer";
import { AppStateType } from "../../redux/store";
import { PostType } from "../../redux/types/types";
import Posts from "./posts";


type PathParamsType = {
    location: any,
}

type PropsType = RouteComponentProps<PathParamsType> & {    
    getPosts: () => void,
    posts: Array<PostType>,
    username: string
}


class PostsContainer extends React.Component<PropsType>{
    componentDidMount(){        
        if(this.props.location.pathname === '/posts')
            this.props.getPosts();        
    }

    render(){
        return <Posts posts={this.props.posts} />
    }    
}

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.posts.posts,
    }
}

export default connect(mapStateToProps, {getPosts })(withRouter(PostsContainer));