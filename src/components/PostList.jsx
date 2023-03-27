import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import Post from './Post';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length ) {
    return <h1>There is no post</h1>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts &&
          posts.map((item, index) => (
            <CSSTransition key={item.id} timeout={250} classNames='post'>
              <Post post={item} number={item.id} remove={remove} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
