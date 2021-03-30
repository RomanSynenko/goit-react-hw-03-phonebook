import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";

import s from './ContainerStyle.module.scss';
import ContactList from "./ContatctList/ContatctList";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }
  onAddContact = (newContact) => this.setState(
    ({ contacts }) => ({ contacts: [...contacts, newContact] })
  )
  handelCheskUniqueContact = (name) => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find((contact) => contact.name === name);
    isExistContact && alert('This contact is already exist');
    return !isExistContact
  }
  handleRemoveContact = (id) => {
    this.setState(({ contacts }) => ({ contacts: contacts.filter((contact) => contact.id !== id) }))
  }
  handelFilter = (filter) => this.setState({ filter });
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={s.container}>
        <ContactForm onAdd={this.onAddContact} onCheckUnique={this.handelCheskUniqueContact} />
        <Filter filter={filter} onChange={this.handelFilter} />
        <ContactList contacts={visibleContacts} onRemove={this.handleRemoveContact} />
      </div>
    )
  };
}
export default App;
