import style from './MyButton.module.css';

const MyButton = ({children, current, ...props}) => {

    const classes = [style.myBtn]
      if (current) {
        classes.push(style.current);
      }
    return (
        <button {...props} className={classes.join(' ')}>
            {children}
        </button>
    );
};

export default MyButton;