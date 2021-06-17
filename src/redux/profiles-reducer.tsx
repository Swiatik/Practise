const SET_PROFILES = 'SET-PROFILES';

const initialState = {
    profiles: []
}

const profilesReducer = (state = initialState, action: any) => {
    switch(action.type){
        case SET_PROFILES: {
            return { ...state, profiles: [ ...state.profiles, ...action.profiles ]}
        }
        default:
            return state;
    }
}

export const setProfilesCreator = (profiles: any) => ({type: SET_PROFILES, profiles})

export default profilesReducer;