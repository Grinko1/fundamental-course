import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostService from '../api/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([])

  const [fetchById, error, isLoading] = useFetching(async () => {
    if (id) {
      const res = await PostService.getPost(id);
      setPost(res.data);
    } else {
      console.log('id is undefined');
    }
  });
    const [fetchComments, errorCom, isLoadingCom] = useFetching(async () => {
      if (id) {
        const res = await PostService.getComments(id);
        setComments(res.data);
      } else {
        console.log('id is undefined');
      }
    });


  useEffect(() => {
    fetchById(id);
    fetchComments(id);
  }, [id]);

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <span> Post id - {id}</span>
          <h1>{post.title}</h1>
          <p style={{ marginTop: 20 }}>{post.body}</p>
        </>
      )}
      <div>
        <h3>Comments</h3>
        {isLoadingCom ? (
          <Loader />
        ) : (
          <div className="comments">
            {comments.map((com) => (
              <div className="comment" key={com.id}>
                <span className="comment-name">{com.name} - {com.email}</span>
                <p className="comment-body">{com.body}</p>
              </div>
            ))}
          </div>
        )}
        {errorCom && <h1>{errorCom}</h1>}
      </div>
    </div>
  );
};

export default PostPage;
