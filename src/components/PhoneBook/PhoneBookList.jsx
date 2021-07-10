import PhoneBookListItem from './PhoneBookListItem';
import css from "./PhoneBookList.module.css"

const PhoneBookList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.ul}>
      {contacts.map(({ name, number, id }) => {
        return (
          <PhoneBookListItem
            onDeleteContact={onDeleteContact}
            key={id}
            name={name}
            number={number}
            id={id}
          />
        );
      })}
    </ul>
  );
};

export default PhoneBookList;
