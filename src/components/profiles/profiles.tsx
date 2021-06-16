import axios from "axios";
import React from "react";

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

type ProfilesState = {
    list: ProfileProps[]
}
function a() : ProfileProps[]{
    axios.get(`https://linkstagram-api.ga/profiles`)
        .then(res => {                    
          return res.data;          
        })
        .catch(err => {
          console.log(err);          
        })
        return []
        debugger;
}

export default class Profiles extends React.Component<{}, ProfilesState>{    
    state: ProfilesState = {
      list: a()
    };

    render(){
        return(
        <ul>
        {this.state.list.map(item => (
          <li key={item.description}>
            <div>{item.first_name}</div>
            <div>{item.followers}</div>
            <div>{item.following}</div>
            <div>{item.job_title}</div>
          </li>
        ))}
      </ul>)
    }
}