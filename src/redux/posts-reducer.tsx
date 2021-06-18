import { profileAPI } from "../api/api";

const SET_POSTS = 'SET-POSTS';

const initialState = {
    posts: []
}

const postsReducer = (state = initialState, action: any) => {
    switch(action.type){
        case SET_POSTS: {
            return { ...state, posts: [ ...action.posts ]}
        }
        default:
            return state;
    }
}
export const setPostsCreator = (posts: any) => ({type: SET_POSTS, posts})

export const getPosts = () => (dispatch: any) => {
    profileAPI.getPosts()
        .then(res=> {
            console.log(res);
            dispatch(setPostsCreator(res.data))})
}


export default postsReducer;