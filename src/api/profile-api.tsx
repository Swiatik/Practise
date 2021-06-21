import { instance } from "./api";

export const profileAPI = {
    getProfiles() {
        return instance.get('profiles').then(res => res.data);
    },
    getUserProfile(username: string) {
        return instance.get(`profiles/${username}`).then(res => res.data);
    },
    editProfile(account: any) {
        return instance.patch(`account`, {account}).then(res => res.data);
    },

}

export default profileAPI;