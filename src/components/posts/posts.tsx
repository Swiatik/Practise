import React from "react";
import { connect } from "react-redux";
import userPhoto from '../../assets/user.png'
import { getPosts } from "../../redux/posts-reducer";
import Header from "../header/header";
import Menu from "../menu/menu";
import styles from './posts.module.css';

interface PostsProps{
    getPosts: any,
    posts: any
}

class Posts extends React.Component<PostsProps>{    
    componentDidMount(){      
       this.props.getPosts();      
    }
    render() {
      return (
      <div className={styles.app_wrapper}>
        <Header/>
        <Menu/>
        <div className={styles.app_wrapper_content}>
        {this.props.posts.map((p: any) => (                           
                 <div>
                  <span>
                      <div>
                          <img src={p.photos[1] != null ? p.photos[1].url : userPhoto} 
                               alt="post.png"  className={styles.userPhoto}/>
                      </div>                     
                  </span>
                      <span>
                      <span>                          
                          <div>{p.username}</div>
                          <div>Description: {p.description}</div>
                          <div>{p.likes_count} likes</div>
                          <div>Created: {p.created_at}</div>
                          <div>{p.is_liked !== false ? "Liked" : "Like"}</div>
                      </span>                      
                  </span>
                  </div>
        ))}
        </div>
    
      </div>)
  }
}

let mapStateToProps = (state: any) => {
  return {      
      posts: state.posts.posts
  }
}

export default connect(mapStateToProps, {getPosts})(Posts);