import {Button} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import { posts } from './Home';

export const FullPost = () => {

    let {id} = useParams();

    const post = posts.find((obj) => obj.id === Number(id))
    console.log(post, id)

    return (
        <div className="full-post">
            <h1>{post.title} </h1>
            <img src={post.imageUrl} alt={post.title}/>
            <p>
                {post.text}
            </p>
            <Link to="/home"><Button>Назад</Button></Link>
        </div>
    );
};
