import { fetch } from 'react-fetch';
import ContactList from './ContactList.client'

export default function Contacts({ show }) {
    const contacts = fetch('http://laozi.in:8000/contacts').json()

    if (show)
        return <ContactList contacts={contacts} />
    return null
}