import { useState, useEffect } from 'react';

const ContactForm = ({ addContact, id, firstName, lastName, phone, email, setEditing, updateContact }) => {
  const [contact, setContact] = useState({ firstName: '', lastName: '', phone: '', email: '' })

  useEffect( () => {
    // setContact({ id: id, firstName: firstName, lastName: lastName, phone: phone, email: email })
    if (id) {
      setContact({ id, firstName, lastName, phone, email })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateContact(id, contact)
      setEditing(false)
    } else {
      addContact(contact)
    }
    setContact({ firstName: '', lastName: '', phone: '', email: '' })
  }

  return (
    <>
      <h1>{ id ? "Update" : "Add" } Contact</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='firstName'
          value={contact.firstName}
          onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
          required 
          placeholder="First Name"
        />
        <input 
          name='lastName'
          value={contact.lastName}
          onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
          required
          placeholder="Last Name"
        />
        <label>Phone:</label>
        <input 
          name='phone'
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          required
        />
        <label>Email:</label>
        <input 
          name='email'
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          type="email"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ContactForm;