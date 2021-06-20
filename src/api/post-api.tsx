import { instance } from "./api";

export const postAPI = {
    createPost(description: string, photo: any) {
        return instance.post('posts', { description, photo });
    },
    getPosts() {
        return instance.get('posts').then(res => res.data);
    },
    getUserPosts(username: string) {
        return instance.get(`profiles/${username}/posts`).then(res => res.data);
    },
    getPost(id: string) {
        return instance.get(`posts/${id}`).then(res => res.data);
    },
    deletePost(id: string) {
        return instance.delete(`posts/${id}`);
    },
    getComments(id: string) {
        return instance.get(`posts/${id}/comments`).then(res => res.data);
    },
    addComment(id: string, message: string) {
        return instance.post(`posts/${id}/comments`, { message });
    },
    like(id: string) {
        return instance.post(`posts/${id}/like`);
    },
    unlike(id: string) {
        return instance.delete(`posts/${id}/like`);
    }
}

export default postAPI;