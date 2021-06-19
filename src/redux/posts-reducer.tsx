import { postAPI } from "../api/api";

const SET_POST = 'SET-POST';
const SET_POSTS = 'SET-POSTS';
const SET_COMMENTS = 'SET-COMMENTS';

const initialState = {
    posts: [],
    comments: [],
    post: {}
    
}

const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_POSTS: {
            return { ...state, posts: action.posts }
        }
        case SET_POST: {
            return { ...state, post: action.post }
        }
        case SET_COMMENTS: {
            return { ...state, comments: action.comments }
        }
        default:
            return state;
    }
}
export const setPost = (post: any) => ({ type: SET_POST, post })
export const setPosts = (posts: any) => ({ type: SET_POSTS, posts })
export const setComments = (comments: any) => ({ type: SET_COMMENTS, comments })

export const getUserPosts = (username: string) => (dispatch: any) => {
    postAPI.getUserPosts(username)
        .then(res => {
            // console.log(res);            
            dispatch(setPosts(res))
        })
}

export const getPosts = () => async (dispatch: any) => {
    await postAPI.getPosts()
        .then(res => {
            dispatch(setPosts(res))
        })
}

export const getComments = (id: string) => async (dispatch: any) => {
    await postAPI.getComments(id)
        .then(res => {
            console.log(res);            
            dispatch(setComments(res))
        })
}

export const getPost = (id: string) => async (dispatch: any) => {
    await postAPI.getPost(id)
        .then(res => {
            console.log(res);
            alert("aaaaa");
            dispatch(setPost(res))
        })
}


export default postsReducer;