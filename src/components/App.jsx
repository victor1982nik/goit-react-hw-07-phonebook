import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
//const keyLocalStorage = 'contacts';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(state => state.contacts.items);
  //console.log(contacts);
  return (
    <div>
      <Section title="PhoneBook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts?.length > 0 && (
          <>
            <Filter />
            <br />
            <ContactList />
          </>
        )}
      </Section>
    </div>
  );
}

// class OldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(
//         keyLocalStorage,
//         JSON.stringify(this.state.contacts)
//       );
//     }
//   }

//   componentDidMount() {
//     try {
//       const contacts = localStorage.getItem(keyLocalStorage);
//       const parsedContacts = JSON.parse(contacts);
//       if (parsedContacts) {
//         this.setState({ contacts: parsedContacts });
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   handleSubmit = ({ name, mobile }) => {
//     const newEl = {
//       id: nanoid(),
//       name: name,
//       number: mobile,
//     };
//     if (this.findContact(name)) {
//       window.alert(`${name} is already in contacts`);
//       return;
//     } else {
//       this.setState(prevState => {
//         return { contacts: [newEl, ...prevState.contacts] };
//       });
//     }
//   };

//   findContact = contactToFind => {
//     const { contacts } = this.state;
//     return contacts.find(contact => contact.name === contactToFind);
//   };

//   handleFilter = e => {
//     this.setState({ filter: e.target.value });
//   };

//   filterContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   handleDeleteItem = idToDelete => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== idToDelete),
//     }));
//   };

//   render() {
//     const { contacts } = this.state;
//     const filteredContacts = this.filterContacts();
//     return (
//       <div>
//         <Section title="PhoneBook">
//           <ContactForm onSubmit={this.handleSubmit} />
//         </Section>

//         <Section title="Contacts">
//           {contacts.length > 0 && (
//             <>
//               <Filter
//                 filter={this.state.filter}
//                 findInList={this.handleFilter}
//               />
//               <br />
//               <ContactList
//                 dataFiltered={filteredContacts}
//                 onDelete={this.handleDeleteItem}
//               />
//             </>
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
//102 строки кода тспользуя класс
//----------------------------------
// const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem(keyLocalStorage)) ?? []);

// useEffect(() => {
//   localStorage.setItem(keyLocalStorage, JSON.stringify(contacts));
// }, [contacts]);

// const filterContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const findContact = contactToFind => {
//   return contacts.find(contact => contact.name === contactToFind);
// };

// const handleDeleteItem = idToDelete => {
//   setContacts(state => state.filter(contact => contact.id !== idToDelete));
// };
// const handleSubmit = ({ name, mobile }) => {
//   if(!name || !mobile) {
//     window.alert(`Неправильный вводa поле не должно быть пустым`);
//     return;
//   }
//   const newEl = {
//     id: nanoid(),
//     name: name,
//     number: mobile,
//   };
//   if (findContact(name)) {
//     window.alert(`${name} is already in contacts`);
//     return;
//   } else {
//     setContacts(state => [newEl, ...state]);
//   }
// };

//const filteredContacts = filterContacts();
