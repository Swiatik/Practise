const SET_USERNAME = 'SET-USERNAME';

interface IProfile {  
    username: string,
    description: string,
    first_name: string,
    followers: number,
    following: number,
    job_title: string,
    last_name: string,
    profile_photo_url: string
}

interface IProfileState{
    profile: IProfile
}
const initialState: IProfileState = {
    profile:{
        username: "None",
        description: "None",    
        first_name: "None",
        followers: 0,
        following: 0,
        job_title: "None",
        last_name: "None",
        profile_photo_url: "None"
    }
}

export function profileReducer( state = initialState, action: any) {
    switch(action.type){
        case SET_USERNAME:
            state.profile = action.user;
            return state;
    }
    return state;
}

export const setUsername = (user: any) => 
    ({type: SET_USERNAME, user: user})

export const dispatchUser = (user: any) => (dispatch: any) => dispatch(setUsername(user))
    
