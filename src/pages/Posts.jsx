import { useEffect, useState } from "react";
import {useTotalPages} from '../hooks/useTotalPages'
import {useFetching} from '../hooks/useFetching'
import PostService from '../api/PostService'
import { getPageCount } from "../utils/pages";
import {useSortAndSearchPosts} from '../hooks/usePosts'
import MyButton from "../components/UI/button/MyButton";
import Modal from '../components/UI/modal/Modal'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import Loader from '../components/UI/loader/Loader'
import PostList from '../components/PostList'
import Pagination from '../components/UI/pagination/Pagination'




function Posts() {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState({
    sortBy: '',
    searchStr: '',
  });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const pagesArray = useTotalPages(totalPages);

  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const res = await PostService.getAll(limit, page);
    setPosts(res.data);
    const totalCount = res.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);
  const sortedAndSearchedPosts = useSortAndSearchPosts(posts, filter.sortBy, filter.searchStr);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };
  const removePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  const changePage = (page) => {
    setPage(page);
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
      {error && <h1>{error}</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <PostList posts={sortedAndSearchedPosts} title="Post list" remove={removePost} />
      )}
      <Pagination page={page} changePage={changePage} pagesArray={pagesArray} />
    </div>
  );
}

export default Posts;
