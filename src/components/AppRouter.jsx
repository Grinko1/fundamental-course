import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { AuthContext } from '../context';
import About from '../pages/About';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';
import ScrollPosts from '../pages/ScrollPosts';
import Layout from './Layout/Layout';

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {isAuth ? (
          <>
            <Route path="posts" element={<Posts />} />
            <Route path="postsscroll" element={<ScrollPosts />} />
            <Route path="posts/:id" element={<PostPage />} />
          </>
        ) : (
          <Route path="/*" element={<Navigate to="/login" replace />} />
        )}

        <Route path="/login" element={<Login />} />

        <Route path="about" element={<About />} />

        <Route path="/error" element={<Error />} />

        <Route path="/*" element={<Navigate to="/error" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
