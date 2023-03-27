import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('auth'));

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, [isAuth]);
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
        }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
