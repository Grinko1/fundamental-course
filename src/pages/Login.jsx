import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import MyButton from '../components/UI/button/MyButton';
import Input from '../components/UI/input/Input'
import { AuthContext } from '../context';

const Login = () => {
    const [values, setValues] = useState({
        login:'',
        password: ''
    })
    const navigate = useNavigate()
    const {setIsAuth} = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault()
        if(values.login !== '' && values.password !== ''){
            setIsAuth(true)
            setValues({
              login: '',
              password: '',
            });
            localStorage.setItem('auth', true)
            return navigate('/posts')
        }
    }
    return (
      <div>
        <h1>Login</h1>
        <form className="formLogin">
          <Input
            type="text"
            placeholder="Login"
            value={values.login}
            onChange={(e) => setValues({ ...values, login: e.target.value })}
          />
          <Input
            type="password"
            placeholder="password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <MyButton onClick={login}>Login</MyButton>
        </form>
      </div>
    );
};

export default Login;