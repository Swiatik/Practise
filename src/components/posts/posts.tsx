import Post from './post/post';

const Posts = (props: any) =>
(
    <div>
        {props.posts.length && props.posts.map((p: any) => (
            <div key={p.id}>
                <Post post={p} isDeleting={props.isDeleting}/>
            </div>
        ))}
    </div>
)

export default Posts;