import axios from "axios";

axios.defaults.baseURL = 'https://6399dcce29930e2bb3e22232.mockapi.io/api';

export async function fetchContacts()  {
    const result = await axios.get('/contacts');    
    return result.data;
}