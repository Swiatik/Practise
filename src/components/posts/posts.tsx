import { PostType } from '../../redux/types/types';
import Post from './post/post';

type PropsType = {
    posts: Array<PostType>
    isDeleting?: boolean
}

const Posts = (props: PropsType) =>
(
    <div>
        {props.posts.length && props.posts.map((p: PostType) => (
            <div key={p.id}>
                <Post post={p} isDeleting={props.isDeleting}/>
            </div>
        ))}
    </div>
)

export default Posts;