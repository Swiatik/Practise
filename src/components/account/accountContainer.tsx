import { compose } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter} from "react-router";
import withLayout from "../../hoc/withLayout";
import { getUserProfile } from "../../redux/profiles-reducer";
import Account from "./account";


type StateType = {
    isAuth: boolean,
}

type PathParamsType = {
    username: string,
    location: any
}

type PropsType = RouteComponentProps<PathParamsType> & {
    getUserProfile: any,
    user: any,
    auth: any
}

class AccountContainer extends React.Component<PropsType, StateType>{
    state = {
        isAuth: true
    }

    componentDidMount(){ 
        if(this.props.location.pathname === '/account')
            this.props.getUserProfile(this.props.auth.username);
        else{
            this.setState({ isAuth: false });        
            this.props.getUserProfile(this.props.match.params.username);
        }
            
    }
    
    render(){
        return <Account user={this.state.isAuth ? this.props.auth: this.props.user} />
    }    
}

let mapStateToProps = (state: any) => {
    return {
        auth: state.auth.auth,
        user: state.profiles.user,        
    }
}

export default compose(
    withLayout,
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(AccountContainer);