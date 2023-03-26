import style from './Modal.module.css';

const Modal = ({children, visible, setVisible}) => {
    const rootClasses = [style.myModal]
    if(visible){
        rootClasses.push(style.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
            
        </div>
    );
};

export default Modal;