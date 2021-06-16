import { bindActionCreators } from '@reduxjs/toolkit';
import React, { FunctionComponent } from 'react';
import './profile.css'
import {setUsername} from '../../redux/profiles-reducer'
import { connect } from 'react-redux';

interface ProfileProps {  
  username: string,
  description: string,
  first_name: string,
  followers: number,
  following: number,
  job_title: string,
  last_name: string,
  profile_photo_url: string
}

const Profile: FunctionComponent<ProfileProps> = (props: ProfileProps) =>
    <div>
        <h3>Username: {props.username}</h3>
        <h3>Description: {props.description}</h3>
        <h3>First name: {props.first_name}</h3>
        <h3>Followers: {props.following}</h3>
        <h3>Following: {props.username}</h3>
        <h3>Job title: {props.job_title}</h3>
        <h3>Last name: {props.last_name}</h3>
        <h3>Profile photo url: {props.profile_photo_url}</h3>
    </div>
    

    Profile.defaultProps ={
    description: "None",    
    first_name: "None",    
    job_title: "None",
    last_name: "None",
    profile_photo_url: "None"
}

const mapStateToProps = (state: any) => {
    return{
    profile: state.profile
    }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({setUsername} , dispatch)

 export default connect(mapStateToProps, mapDispatchToProps)(Profile);