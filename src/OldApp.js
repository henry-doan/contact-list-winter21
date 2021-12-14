import { Component } from 'react';
import ContactList from './components/contacts/ContactList';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'Bob', lastName: 'smith', phone: '123-123-1233', email: 'bob@bob.com' },
    { id: 2, firstName: 'Jill', lastName: 'jones', phone: '123-123-3333', email: 'jill@jill.com' },
    { id: 3, firstName: 'tim', lastName: 'smith', phone: '123-222-1233', email: 'tim@tim.com' },
  ] }

  render() {
    const { contacts } = this.state 
    // contacts = this.state.contacts
    return (
      <>
        <h1>Contact List</h1>
        <ContactList contacts={contacts}/>
      </>
    )
  }
}

export default App;