import { compose } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/user.png'
import withLayout from "../../hoc/withLayout";
import { getProfiles } from "../../redux/profiles-reducer";
import { AppStateType } from "../../redux/store";
import { ProfileType } from "../../redux/types/types";
import styles from './profiles.module.css';

interface ProfilesProps {
  getProfiles: () => void
  profiles: Array<ProfileType>
}

class Profiles extends React.Component<ProfilesProps>{
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    return (
      <div className={styles.ai}>

        <div className={styles.content_container}>
          {this.props.profiles.map((p: ProfileType) => (
            <div key={p.username} className={styles.profile}>
              <div className={styles.photo}>
                <div>
                  <NavLink to={'/profiles/' + p.username}>
                    <img src={p.profile_photo_url != null ? p.profile_photo_url : userPhoto}
                      alt="user.png" className={styles.userPhoto} />
                  </NavLink>
                </div>
              </div>
              <div>
                <div>
                  <div>{p.username}</div>
                  <div>{p.first_name} {p.last_name}</div>
                  <div>{p.followers} followers</div>
                  <div>{p.following} following</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>)
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    profiles: state.profiles.profiles
  }
}

export default compose(
  withLayout,
  connect(mapStateToProps, { getProfiles }),
)(Profiles);