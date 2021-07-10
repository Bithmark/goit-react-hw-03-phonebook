
import PhoneBookList from './components/PhoneBook/PhoneBookList';
import PhoneBookForm from './components/PhoneBook/PhoneBookForm';
import PhonebookFilter from './components/PhoneBook/PhoneBookFilter';
import filterContacts from './helpers/filterContacts';
import { Component } from 'react';
import shortId from 'shortid';
import css from "./App.module.css"


class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

componentDidMount() {

  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);

  if(parsedContacts)  {
    this.setState({contacts: parsedContacts})
  }
}

componentDidUpdate(prevProps, prevState) {
  if(this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
}

  handleSetUserInfo = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddContact = e => {
    e.preventDefault();
    if (this.state.contacts.some(el => el.name === this.state.name)) {
      alert(` ${this.state.name} is already in contacts!`);
      return;
    }
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: shortId.generate(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
      name: '',
      number: '',
    }));
  };

  handleDeleteContact = e => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== e.target.id),
    });
  };

  handleChangeFilter = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const contacts = filterContacts(this.state.contacts, this.state.filter);
    return (
      <div className={css.div}>
        <PhoneBookForm
          name={this.state.name}
          number={this.state.number}
          onAddContact={this.handleAddContact}
          onSetUserInfo={this.handleSetUserInfo}
        />
        <PhonebookFilter
          filterValue={this.state.filter}
          onSetFilter={this.handleChangeFilter}
        />
        <PhoneBookList
          onDeleteContact={this.handleDeleteContact}
          contacts={contacts}
        />
      </div>
    );
  }
}

export default App;
