import Contact from './Contact';

const ContactList = ({ contacts, updateContact, deleteContact }) => (
  <>
    { contacts.map( contact => 
      // <Contact id={contact.id} firstName={contact.firstName} .../>
      <Contact 
        key={contact.id} 
        {...contact} 
        updateContact={updateContact} 
        deleteContact={deleteContact}
      />
    )}
  </>
)

export default ContactList;