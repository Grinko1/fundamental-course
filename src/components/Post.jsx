import {useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const Post = ({ post, number, remove }) => {
  let navigate = useNavigate();

  const openPost = () => {
    return navigate(`/posts/${number}`);
  };
  
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div style={{ display: 'flex', gap: 5 }}>
        <MyButton onClick={() => remove(post.id)}>Delete</MyButton>
        <MyButton onClick={openPost}>Open</MyButton>
      </div>
    </div>
  );
};

export default Post;
