import {authAPI} from "../api/api";
import { setProfileData } from "./profiles-reducer";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {        
    username: null,    
    isAuth: false
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}


export const setAuthUserData = (username: string, isAuth: boolean) => 
        ({type: SET_USER_DATA, payload: { username, isAuth } });

export const login = (login: string, password: string) => (dispatch: any) => {
    authAPI.login(login, password)
        .then(res => {
              console.log(res);
              authAPI.me().then(res => {                     
                dispatch(setProfileData(res));
              });
        });
}

export default authReducer;