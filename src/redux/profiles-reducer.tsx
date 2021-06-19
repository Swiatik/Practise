import { postAPI, profileAPI } from "../api/api";
import { setPosts } from "./posts-reducer";

const SET_PROFILES = 'SET-PROFILES';;
const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
    user: {
        description: null,
        first_name: null,
        followers: 0,
        following: 0,
        job_title: null,
        last_name: null,
        profile_photo_url: null,
        username: null
    },
    profiles: []
}

const profilesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PROFILES: {
            return { ...state, profiles: [...action.profiles] }
        }
        case SET_USER_DATA: {
            return {
                ...state,
                user: {
                    description: action.user.description,
                    first_name: action.user.first_name,
                    followers: action.user.followers,
                    following: action.user.following,
                    job_title: action.user.job_title,
                    last_name: action.user.last_name,
                    profile_photo_url: action.user.profile_photo_url,
                    username: action.user.username
                }
            }
        }
        default:
            return state;
    }
}

export const setProfilesCreator = (profiles: any) => ({ type: SET_PROFILES, profiles })

export const setUserData = (user: any) =>
    ({ type: SET_USER_DATA, user });

export const getProfiles = () => (dispatch: any) => {
    profileAPI.getProfiles()
        .then(res => dispatch(setProfilesCreator(res)))
}

export const getUserProfile = (username: string) => (dispatch: any) => {
    profileAPI.getUserProfile(username)
        .then(res => dispatch(setUserData(res)))
    postAPI.getUserPosts(username)
        .then(res => dispatch(setPosts(res)))
}

export default profilesReducer;