import { compose } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/user.png'
import withLayout from "../../hoc/withLayout";
import { getProfiles } from "../../redux/profiles-reducer";
import styles from './profiles.module.css';

interface ProfilesProps {
  getProfiles: any,
  profiles: any
}

class Profiles extends React.Component<ProfilesProps>{
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    return (
      <div className={styles.app_wrapper}>
        <div className={styles.app_wrapper_content}>
          {this.props.profiles.map((p: any) => (
            <div key={p.username}>
              <span>
                <div>
                  <NavLink to={'/profiles/' + p.username}>
                    <img src={p.profile_photo_url != null ? p.profile_photo_url : userPhoto}
                      alt="user.png" className={styles.userPhoto} />
                  </NavLink>
                </div>
              </span>
              <span>
                <span>
                  <div>{p.username}</div>
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

export default compose(
  withLayout,
  connect(mapStateToProps, { getProfiles }),
)(Profiles);