import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter} from "react-router";
import { getPosts } from "../../redux/posts-reducer";
import Posts from "./posts";


type PathParamsType = {
    location: any,
}

type PropsType = RouteComponentProps<PathParamsType> & {    
    getPosts: any,
    posts: any,
    username: any
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

let mapStateToProps = (state: any) => {
    return {
        posts: state.posts.posts,
    }
}

export default connect(mapStateToProps, {getPosts })(withRouter(PostsContainer));