import { compose } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import withLayout from "../../hoc/withLayout";
import { getUserProfile } from "../../redux/profiles-reducer";
import { AppStateType } from "../../redux/store";
import { AccountType } from "../../redux/types/types";
import Account from "./account";

type PathParamsType = {
    username: string
}

type PropsType = RouteComponentProps<PathParamsType> & {
    getUserProfile: (username: string) => void
    user: AccountType
}

class AccountContainer extends React.Component<PropsType>{

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.username);
    }

    render() {
        return <Account user={this.props.user} />
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        user: state.profiles.user,
    }
}

export default compose(
    withLayout,
    connect(mapStateToProps, { getUserProfile }),
    withRouter
)(AccountContainer);