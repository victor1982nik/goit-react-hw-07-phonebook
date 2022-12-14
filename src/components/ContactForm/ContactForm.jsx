import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Button, Form } from './ContactForm.styled';
import { ContactElement } from './ContactsElement/ContactsElement';
import { addContact } from "redux/contactsSlice";

export function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const {name, mobile} = e.target.elements;    
    dispatch(addContact({name: name.value, tel: mobile.value}));
    
    setName('');
    setMobile('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContactElement
        label="Name"
        name="name"
        type="text"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => setName(e.target.value)}
      />
      <br />
      <ContactElement
        label="Number"
        name="mobile"
        type="tel"
        value={mobile}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={e => setMobile(e.target.value)}
      />
      <br />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
