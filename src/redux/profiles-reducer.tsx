import profileAPI from "../api/profile-api";
import postAPI from "../api/post-api";
import { setPosts, setPostsActionType } from "./posts-reducer";
import { setProfileData, setProfileDataActionType } from "./auth-reducer";
import { PostType, ProfileType } from "./types/types";
import { ThunkAction } from "@reduxjs/toolkit";
import { AppStateType } from "./store";

const SET_PROFILES = 'SET-PROFILES';;
const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
    user: {} as ProfileType,
    profiles: [] as Array<ProfileType>
}

type initialStateType = typeof initialState;

const profilesReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SET_PROFILES: {
            return { ...state, profiles: action.profiles.filter((profile: ProfileType) => profile.username !== "try100"  && profile.username !== "Vladoseek" && profile.username !== "usernameTest") }
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

type ActionsTypes = setProfilesCreatorActionCreator | setUserDataActionCreator |
    setProfileDataActionType | setPostsActionType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

type setProfilesCreatorActionCreator = {
    type: typeof SET_PROFILES
    profiles: Array<ProfileType>
}
export const setProfilesCreator = (profiles: Array<ProfileType>): setProfilesCreatorActionCreator =>
    ({ type: SET_PROFILES, profiles })

type setUserDataActionCreator = {
    type: typeof SET_USER_DATA
    user: ProfileType
}
export const setUserData = (user: ProfileType): setUserDataActionCreator =>
    ({ type: SET_USER_DATA, user });

export const getProfiles = (): ThunkType => {
    return async (dispatch) => {
        await profileAPI.getProfiles()
            .then(res => dispatch(setProfilesCreator(res)))
    }
}

export const getUserProfile = (username: string): ThunkType => {
    return async (dispatch) => {
        await profileAPI.getUserProfile(username)
            .then(res => {
                dispatch(setUserData(res))
                postAPI.getUserPosts(username)
                    .then(res => dispatch(setPosts(res)))
            })
    }
}

export const editProfile = (account: any): ThunkType => {
    return async (dispatch) => {
        await profileAPI.editProfile(account)
            .then(res => dispatch(setProfileData(res)))
    }
}

export default profilesReducer;