import { ThunkAction } from "@reduxjs/toolkit";
import { setToken } from "../api/api";
import authAPI from "../api/auth-api"
import { AppStateType } from "./store";
import { AccountType } from "./types/types";

const SET_PROFILE_DATA = 'SET-PROFILE-DATA'

let initialState = {
    auth: {} as AccountType
};

type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: setProfileDataActionType): initialStateType => {
    switch (action.type) {
        case SET_PROFILE_DATA: {
            return {
                ...state,
                auth: action.user
            }
        }
        default:
            return state;
    }
}

export type setProfileDataActionType = {
    type: typeof SET_PROFILE_DATA
    user: AccountType
}

export const setProfileData = (user: AccountType): setProfileDataActionType =>
    ({ type: SET_PROFILE_DATA, user });


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, setProfileDataActionType>

export const login = (login: string, password: string): ThunkType => {
    return async (dispatch) => {
        await authAPI.login(login, password)
            .then(res => {
                setToken(res.headers.authorization);
                authAPI.me().then(res => {
                    dispatch(setProfileData(res.data));
                    // authAPI.getPhotoKey().then(res => {
                    //     console.log(res);
                    // });
                });
            });
    }
}

export const registrate = (username: string, login: string, password: string): ThunkType => {
    return async (dispatch) => {
        await authAPI.registrate(username, login, password)
            .then(res => {
                setToken(res.headers.authorization);
                authAPI.me().then(res => {
                    dispatch(setProfileData(res.data));
                });
            });
    }
}

export const me = (): ThunkType => {
    return async (dispatch) => {
        authAPI.me().then(res => {
            dispatch(setProfileData(res.data));
        });
    }
}

export default authReducer;