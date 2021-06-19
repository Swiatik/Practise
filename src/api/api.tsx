import axios from "axios";


export  var instance = axios.create({    
    baseURL: 'https://linkstagram-api.ga/',
    headers:  {
        "authorization": "eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoyODgsImF1dGhlbnRpY2F0ZWRfYnkiOlsicGFzc3dvcmQiXX0.yYmN67UHgzmJqHQ93Gtpg6luUA5zM4D-jLymOC2q_jo"
    }    
});

export const authAPI = {    
    me(){
        return instance.get('account').then(res => res.data);
    },
    login(login: string, password:string ) {
        return instance.post('login', { login, password}).then(res => res.data);
    }    
}

export const profileAPI = {    
    getProfiles(){
        return instance.get('profiles').then(res => res.data);
    },
    getUserProfile(username: string){
        return instance.get(`profiles/${username}`).then(res => res.data);
    },
}

export const postAPI = {
    getPosts(){
        return instance.get('posts').then(res => res.data);
    },
    getUserPosts(username: string){
        return instance.get(`profiles/${username}/posts`).then(res => res.data);
    },
    getPost(id: string){
        return instance.get(`posts/${id}`).then(res => res.data);
    },
    getComments(id: string){
        return instance.get(`posts/${id}/comments`).then(res => res.data);
    }

}