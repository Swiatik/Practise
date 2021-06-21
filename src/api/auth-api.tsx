import { instance } from "./api";

const authAPI = {
    me() {
        return instance.get('account');
    },
    login(login: string, password: string) {
        return instance.post('login', { login, password });
    },
    registrate(username: string, login: string, password: string) {
        return instance.post('create-account', { username, login, password });
    },

}

export default authAPI;