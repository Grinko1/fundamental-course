import style from './Layout.module.css';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const Layout = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  };
  return (
    <div>
      <header className={style.header}>
        <ul className={style.header_menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
    
          <li>
            <Link to="/postsscroll">Posts scroll</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {isAuth ? (
            <li onClick={logout} style={{ cursor: 'pointer' }}>
              Logout
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
