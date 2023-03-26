import { useMemo, useState } from 'react';
import './App.css';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import Modal from './components/UI/modal/Modal';
import { useSortAndSearchPosts } from './hooks/usePosts';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования' },
    { id: 2, title: 'Python', body: 'Python - язык программирования' },
    { id: 3, title: 'Java', body: 'Java - язык программирования' },
    { id: 4, title: 'PHP', body: 'PHP - язык программирования' },
    { id: 5, title: 'Goland', body: 'Goland - язык программирования' },
  ]);

  const [visible, setVisible] = useState(false);

  const [filter, setFilter] = useState({
    sortBy: '',
    searchStr: '',
  });

  const sortedAndSearchedPosts = useSortAndSearchPosts(posts, filter.sortBy, filter.searchStr);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };
  const removePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <MyButton onClick={() => setVisible(true)} style={{ marginTop: '20px' }}>
        Add post
      </MyButton>
      <Modal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </Modal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList posts={sortedAndSearchedPosts} title="Post list" remove={removePost} />
    </div>
  );
}

export default App;
