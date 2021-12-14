import { useState } from 'react';
import ContactList from './components/contacts/ContactList';
import ContactForm from './components/contacts/ContactForm';

const App = ({}) => {
  const [contacts, setContacts] = useState([
    { id: 1, firstName: 'Bob', lastName: 'smith', phone: '123-123-1233', email: 'bob@bob.com' },
    { id: 2, firstName: 'Jill', lastName: 'jones', phone: '123-123-3333', email: 'jill@jill.com' },
    { id: 3, firstName: 'tim', lastName: 'smith', phone: '123-222-1233', email: 'tim@tim.com' },
  ])

  const getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  // HOC is where you are storing the objs 
  // all CRUD functions 
  const addContact = (incomingContact) => {
    // no need for this line when we have a db
    let newContact = { id: getId(), ...incomingContact }
    setContacts([ ...contacts, newContact ])
  }

  const updateContact = (id, incomingContact) => {
    let newUpdatedContacts = contacts.map( c => {
      if (c.id === id) {
        return incomingContact
      }
      return c
    })
    setContacts(newUpdatedContacts)
  }

  const deleteContact = (id) => {
    setContacts( contacts.filter( c => c.id !== id ))
  }

  return (
    <>
      <h1>Contact List</h1>
      <ContactForm addContact={addContact} />
      <ContactList 
        contacts={contacts} 
        updateContact={updateContact}
        deleteContact={deleteContact}
      />
    </>
  )
}


export default App;
