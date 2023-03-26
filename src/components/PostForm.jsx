import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import Input from './UI/input/Input';

const PostForm = ({create}) => {
      const [post, setPost] = useState({
        title: '',
        body: '',
      });
        const addNewPost = (e) => {
          e.preventDefault();
          if (post.title !== '' && post.body !== '') {
            const newPost = { ...post, id: Date.now() };
            create(newPost);
            setPost({ title: '', body: '' });

          }
        };

    

    
    return (
      <form>
        <Input
          type="text"
          placeholder="title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <Input
          type="text"
          placeholder="description"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />

        <MyButton onClick={addNewPost}>Create a post</MyButton>
      </form>
    );
};

export default PostForm;