import MyButton from '../button/MyButton';
import style from './Pagination.module.css';

const Pagination = ({ pagesArray, changePage, page }) => {
  return (
    <div className={style.pagination}>
      {pagesArray &&
        pagesArray.map((p) => (
          <MyButton onClick={() => changePage(p)} key={p} current={page === p ? true : false}>
            {p}
          </MyButton>
        ))}
    </div>
  );
};

export default Pagination;