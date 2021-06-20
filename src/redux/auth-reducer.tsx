import { setToken } from "../api/api";
import authAPI from  "../api/auth-api"
;
const SET_PROFILE_DATA = 'SET-PROFILE-DATA'

let initialState = {
    auth: {
        description: null,
        first_name: null,
        followers: 0,
        following: 0,
        job_title: null,
        last_name: null,
        profile_photo_url: null,
        username: null
    }

};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PROFILE_DATA: {
            return {
                ...state,
                auth: {
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

export const setProfileData = (user: any) => ({ type: SET_PROFILE_DATA, user });

export const login = (login: string, password: string) => (dispatch: any) => {
    authAPI.login(login, password)
        .then(res => {
            setToken(res.headers.authorization);
            authAPI.me().then(res => {               
                dispatch(setProfileData(res.data));
            });
        });
}

export const registrate = (username: string, login: string, password: string) => (dispatch: any) => {
    authAPI.registrate(username, login, password)
        .then(res => {
            setToken(res.headers.authorization);            
            authAPI.me().then(res => {                
                dispatch(setProfileData(res.data));
            });
        });
}
export default authReducer;