import { instance } from "./api";
let photoID = "uppy-ava/jpg-1e-image/jpeg-21388-1624290818738";
export const postAPI = {
    createPost(description: string, photo: any) {
        // return instance.post('posts', { description, photo });
        debugger;
        return instance.get('/s3/params', { params: { id: photoID } });
    },
    getPosts() {
        return instance.get('posts').then(res => res.data);
    },
    getUserPosts(username: string) {
        return instance.get(`profiles/${username}/posts`).then(res => res.data);
    },
    getPost(id: number) {
        return instance.get(`posts/${id}`).then(res => res.data);
    },
    deletePost(id: number) {
        return instance.delete(`posts/${id}`);
    },
    getComments(id: number) {
        return instance.get(`posts/${id}/comments`).then(res => res.data);
    },
    addComment(id: number, message: string) {
        return instance.post(`posts/${id}/comments`, { message });
    },
    like(id: number) {
        return instance.post(`posts/${id}/like`);
    },
    unlike(id: number) {
        return instance.delete(`posts/${id}/like`);
    }
}

export default postAPI;