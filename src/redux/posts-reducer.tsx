import { postAPI } from "../api/post-api";

const SET_POST = 'SET-POST';
const SET_POSTS = 'SET-POSTS';
const DELETE_POST = 'DELETE_POST';
const SET_COMMENTS = 'SET-COMMENTS';
const LIKE = 'LIKE'
const UNLIKE = 'UNLIKE'


const initialState = {
    posts: [],
    comments: [],
    post: {
        photos: []
    },
}

const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_POSTS: {
            return { ...state, posts: action.posts }
        }
        case SET_POST: {
            return { ...state, post: action.post }
        }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter( (post: any) => post.id !== action.id) }
        }
        case SET_COMMENTS: {
            return { ...state, comments: action.comments }
        }
        case LIKE:
            return {
                ...state,
                posts: state.posts.map((p: any) => {
                    if (p.id === action.id) {
                        return { ...p, is_liked: true, likes_count: p.likes_count + 1 }
                    }
                    return p;
                }),
            }
        case UNLIKE:
            return {
                ...state,
                posts: state.posts.map((p: any) => {
                    if (p.id === action.id) {
                        return { ...p, is_liked: false, likes_count: p.likes_count - 1 }
                    }
                    return p;
                }),
            }
        default:
            return state;
    }
}
export const setPost = (post: any) => ({ type: SET_POST, post })
export const setPosts = (posts: any) => ({ type: SET_POSTS, posts })
export const deletePostCreator = (id: string) => ({ type: DELETE_POST, id })
export const setComments = (comments: any) => ({ type: SET_COMMENTS, comments })
export const likeCreator = (id: string) => ({ type: LIKE, id })
export const unlikeCreator = (id: string) => ({ type: UNLIKE, id })


export const getUserPosts = (username: string) => (dispatch: any) => {
    postAPI.getUserPosts(username)
        .then(res => {
            // console.log(res);        
            dispatch(setPosts(res))
        })
}

export const createPost = (description: string, photo: any) => (dispatch: any) => {
    postAPI.createPost(description, photo)
        .then(res => {
            postAPI.getUserPosts(res.data.author.username)
                .then(res => {
                    console.log(res);        
                    dispatch(setPosts(res))
                })
        })
}

export const getPosts = () => (dispatch: any) => {
    postAPI.getPosts()
        .then(res => {
            dispatch(setPosts(res))
        })
}

export const getComments = (id: string) => (dispatch: any) => {
    postAPI.getPost(id)
        .then(res => {
            dispatch(setPost(res))
            postAPI.getComments(id)
                .then(res => {
                    ;
                    dispatch(setComments(res))
                })
        })
}

export const addComment = (id: string, message: string) => (dispatch: any) => {
    postAPI.addComment(id, message)
        .then(res => {
            postAPI.getComments(id)
                .then(res => {
                    ;
                    dispatch(setComments(res))
                })
        })
}

export const deletePost = (id: string) => (dispatch: any) => {
    postAPI.deletePost(id)
        .then(res => {    
            console.log(res);
            dispatch(deletePostCreator(id));
        })
}

export const like = (id: string) => (dispatch: any) => {
    postAPI.like(id)
        .then(res => {
            dispatch(likeCreator(id));
            postAPI.getPost(id)
                .then(res => {
                    dispatch(setPost(res))
                })
        })
}

export const unlike = (id: string) => (dispatch: any) => {
    postAPI.unlike(id)
        .then(res => {
            dispatch(unlikeCreator(id));
        })
}

export default postsReducer;