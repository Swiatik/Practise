export type ProfileType = {
    username: string
    description: string
    first_name: string
    followers: number
    following: number
    job_title: string
    last_name: string
    profile_photo_url: string
}

export type PhotoType = {
    id: string
    storage: string
    metadata: {
        size: number
        mime_type: string
        filename: string
    }
}

export type AccountType = {
    username: string
    description: string
    email: string
    first_name: string
    followers: number
    following: number
    job_title: string
    last_name: string
    profile_photo_url: string
}

export type PostPhotoType = {
    id: number
    url: string
}

export type PostType = {
    id: number
    author: ProfileType
    created_at: string
    description: string
    is_liked: boolean
    likes_count: number
    photos: Array<PostPhotoType>
}

export type CommentType = {
    id: number
    commenter: ProfileType
    created_at: string
    message: string
}

