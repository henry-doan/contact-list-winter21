import { useState } from 'react';
import ContactForm from './ContactForm';

const Contact = ({ id, firstName, lastName, phone, email, updateContact, deleteContact }) => {
  const [editing, setEditing] = useState(false)

  return (
    <>
      <h1>Contact #{id}</h1>
      <h2>{firstName} {lastName}</h2>
      <p>
        Phone: {phone}
        <br />
        Email: {email}
      </p>
      { 
        editing ?
          <>
            <ContactForm
              id={id}
              firstName={firstName}
              lastName={lastName}
              phone={phone}
              email={email}
              setEditing={setEditing}
              // update contact function
              updateContact={updateContact}
            />
            <button onClick={() => setEditing(false)}>Cancel</button>
          </>
        :
        <button onClick={() => setEditing(true)}>Edit</button>
      }
      <button onClick={() => deleteContact(id)}>Delete</button>
    </>
  )
}

export default Contact;