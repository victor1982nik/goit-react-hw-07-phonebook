import axios from "axios";

axios.defaults.baseURL = 'https://6399dcce29930e2bb3e22232.mockapi.io/api';

export async function fetchContacts()  {
    const result = await axios.get('/contacts');    
    return result.data;
}

export async function addContact(obj){    
    const result = await axios.post("/contacts", obj);    
    return result.data;
}

export async function deleteContact(id){    
    const result = await axios.delete(`/contacts/${id}`);    
    return result.data;
}