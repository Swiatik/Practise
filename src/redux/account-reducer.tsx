const SET_ACCOUNT = 'SET-ACCOUNT';

const initialState = {
    account: {}
}

const accountReducer = (state = initialState, action: any) => {
    switch(action.type){
        case SET_ACCOUNT: {
            return { ...state, user: action.user}
        }
        default:
            return state;
    }
}

export const setAccountCreator = (user: any) => ({type: SET_ACCOUNT, user})

export default accountReducer;