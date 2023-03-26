import React from 'react';
import MyButton from './UI/button/MyButton';

const Post = ({post, number, remove}) => {
    return (
      <div className="post">
        <div className="post__content">
          <strong>
            {number}. {post.title}
          </strong>
          <div>{post.body}</div>
        </div>
        <MyButton onClick={()=>remove(post.id)} >Delete</MyButton>
      </div>
    );
};

export default Post;