import Post from './post/post';

const Posts = (props: any) =>
(
    <div>
        {props.posts.length && props.posts.map((p: any) => (
            <div key={p.id}>
                <Post post={p} />
            </div>
        ))}
    </div>
)

export default Posts;