import './App.css';
import Contacts from './Contacts'
import { useEffect, useState } from 'react';

const URL = "http://laozi.in:8000/contacts"

function App() {

  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)

  async function handleCreate() {
    setLoading(true)
    const d = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value
    }
    document.getElementById("name").value = ''
    document.getElementById("email").value = ''
    document.getElementById("phone").value = ''
    console.log(d)
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(d),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const contact = await response.json()
    setContacts(c => [...c, {...d, id: contact.id}])
    setLoading(false)
  }
  async function updateContacts() {
    setLoading(true)
    const response = await fetch(URL)
    const data = await response.json()
    setContacts(data)
    setLoading(false)
  }

  useEffect(() => {
    updateContacts()
  }, [])

  return (
    <div className="App">
      <div>
        <label>
          Name:
          <input id="name" type="text" />
        </label>
        <label>
          Email:
          <input id="email" type="email" />
        </label>
        <label>
          Phone:
          <input id="phone" type="text" />
        </label>
        <button onClick={handleCreate}>Create</button>
      </div>
      <div>
        {loading && "Loading..."}
        {!loading && <Contacts contacts={contacts} updateContacts={updateContacts}/>}
      </div>
    </div>
  );
}

export default App;
