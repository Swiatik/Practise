import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import userPhoto from '../../assets/user.png'
import { setProfilesCreator } from "../../redux/profiles-reducer";
import Header from "../account/header/header";
import Menu from "../account/menu/menu";

import styles from './profiles.module.css';

interface ProfilesProps{
    setProfiles: any,
    profiles: any
}

class Profiles extends React.Component<ProfilesProps>{    
    componentDidMount(){
      axios.get(`https://linkstagram-api.ga/profiles`)
      .then(res => {
          this.props.setProfiles(res.data);
      });
    }
    render() {
      return (
      <div className={styles.app_wrapper}>
        <Header/>
        <Menu/>
        <div className={styles.app_wrapper_content}>
        {this.props.profiles.map((p: any) => (                 
                 <div>
                  <span>
                      <div>
                          <img src={p.profile_photo_url != null ? p.profile_photo_url : userPhoto} 
                               alt="user.png"  className={styles.userPhoto}/>
                      </div>                     
                  </span>
                      <span>
                      <span>
                          <div>{p.first_name} {p.last_name}</div>
                          <div>Description: {p.description}</div>
                          <div>{p.followers} followers</div>
                          <div>{p.following} following</div>
                          <div>Job: {p.job_title}</div>
                      </span>                      
                  </span>
                  </div>
        ))}
        </div>
    
      </div>)
  }
}

let mapStateToProps = (state: any) => {
  return {      
      profiles: state.profiles.profiles
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {        
      setProfiles: (profiles: any) => {
          dispatch(setProfilesCreator(profiles));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);