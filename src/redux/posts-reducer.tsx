const SET_POSTS = 'SET-POSTS';

const initialState = {
    posts: []
}

const postsReducer = (state = initialState, action: any) => {
    switch(action.type){
        case SET_POSTS: {
            return { ...state, posts: [ ...state.posts, ...action.posts ]}
        }
        default:
            return state;
    }
}

export const setPostsCreator = (posts: any) => ({type: SET_POSTS, posts})

export default postsReducer;