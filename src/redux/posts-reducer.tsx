import { ThunkAction } from "@reduxjs/toolkit";
import { convertTypeAcquisitionFromJson } from "typescript";
import { postAPI } from "../api/post-api";
import { AppStateType } from "./store";
import { CommentType, PostType } from "./types/types";

const SET_POST = 'SET-POST';
const SET_POSTS = 'SET-POSTS';
const DELETE_POST = 'DELETE_POST';
const SET_COMMENTS = 'SET-COMMENTS';
const LIKE = 'LIKE'
const UNLIKE = 'UNLIKE'


const initialState = {
    posts: [] as Array<PostType>,
    comments: [] as Array<CommentType>,
    post: {
        photos: []
    }
}

type initialStateType = typeof initialState;

const postsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_POSTS: {
            return { ...state, posts: action.posts.filter((post: PostType) => post.author.username !== "tony_starkk" && post.author.username !== "tony_stark" && post.author.username !== "qwerty") }
        }
        case SET_POST: {
            return { ...state, post: action.post }
        }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter((post: PostType) => post.id !== action.id) }
        }
        case SET_COMMENTS: {
            return { ...state, comments: action.comments.filter((comment: CommentType) => comment.commenter.username !== "tony_starkk" && comment.commenter.username !== "tony_stark") }
        }
        case LIKE:
            return {
                ...state,
                posts: state.posts.map((p: PostType) => {
                    if (p.id === action.id) {
                        return { ...p, is_liked: true, likes_count: p.likes_count + 1 }
                    }
                    return p;
                }),
            }
        case UNLIKE:
            return {
                ...state,
                posts: state.posts.map((p: PostType) => {
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

type ActionsTypes = setPostActionType | setPostsActionType | deletePostCreatorActionType |
    setCommentsActionType | likeCreatorActionCreator | unlikeCreatorActionCreator

type setPostActionType = {
    type: typeof SET_POST
    post: PostType
}
export const setPost = (post: PostType): setPostActionType => ({ type: SET_POST, post })

export type setPostsActionType = {
    type: typeof SET_POSTS
    posts: Array<PostType>
}
export const setPosts = (posts: Array<PostType>): setPostsActionType => ({ type: SET_POSTS, posts })

type deletePostCreatorActionType = {
    type: typeof DELETE_POST
    id: number
}
export const deletePostCreator = (id: number): deletePostCreatorActionType => ({ type: DELETE_POST, id })

type setCommentsActionType = {
    type: typeof SET_COMMENTS
    comments: Array<CommentType>
}
export const setComments = (comments: Array<CommentType>): setCommentsActionType =>
    ({ type: SET_COMMENTS, comments })

type likeCreatorActionCreator = {
    type: typeof LIKE
    id: number
}
export const likeCreator = (id: number): likeCreatorActionCreator => ({ type: LIKE, id })

type unlikeCreatorActionCreator = {
    type: typeof UNLIKE
    id: number
}
export const unlikeCreator = (id: number): unlikeCreatorActionCreator => ({ type: UNLIKE, id })

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUserPosts = (username: string): ThunkType => {
    return async (dispatch) => {
        await postAPI.getUserPosts(username)
            .then(res => {
                // console.log(res);        
                dispatch(setPosts(res))
            })
    }
}

export const createPost = (description: string, photo: any): ThunkType => {
    return async (dispatch) => {
        await postAPI.createPost(description, photo)
            .then(res => {
                postAPI.getUserPosts(res.data.author.username)
                    .then(res => {
                        console.log(res);
                        dispatch(setPosts(res))
                    })
            })
    }
}

export const getPosts = (): ThunkType => {
    return async (dispatch) => {
        await postAPI.getPosts()
            .then(res => {
                console.log(res);
                dispatch(setPosts(res))
            })
    }
}

export const getComments = (id: number): ThunkType => {
    return async (dispatch) => {
        await postAPI.getPost(id)
            .then(res => {
                dispatch(setPost(res))
                postAPI.getComments(id)
                    .then(res => {
                        ;
                        dispatch(setComments(res))
                    })
            })
    }
}

export const addComment = (id: number, message: string): ThunkType => {
    return async (dispatch) => {
        await postAPI.addComment(id, message)
            .then(res => {
                postAPI.getComments(id)
                    .then(res => {
                        ;
                        dispatch(setComments(res))
                    })
            })
    }
}

export const deletePost = (id: number): ThunkType => {
    return async (dispatch) => {
        await postAPI.deletePost(id)
            .then(res => {
                console.log(res);
                dispatch(deletePostCreator(id));
            })
    }
}

export const like = (id: number): ThunkType => {
    return async (dispatch) => {
        await postAPI.like(id)
            .then(res => {
                dispatch(likeCreator(id));
                postAPI.getPost(id)
                    .then(res => {
                        dispatch(setPost(res))
                    })
            })
    }
}

export const unlike = (id: number): ThunkType => {
    return async (dispatch) => {
        await postAPI.unlike(id)
            .then(res => {
                dispatch(unlikeCreator(id));
            })
    }
}

export default postsReducer;