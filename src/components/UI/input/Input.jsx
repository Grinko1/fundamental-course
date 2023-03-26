import style from './Input.module.css'

const Input = (props) => {
    return (
      
            <input className={style.myInput} {...props}/>

    );
};

export default Input;