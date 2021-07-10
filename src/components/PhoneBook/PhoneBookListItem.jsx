import css from "./PhoneBookListItem.module.css"

const PhoneBookListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={css.li}>
      <p>Name:{name}</p>
      <p>Number:{number}</p>
      <button  className={css.btn} onClick={onDeleteContact} id={id}>
        Delete
      </button>
    </li>
  );
};

export default PhoneBookListItem;
