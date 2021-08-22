import React, { useState } from 'react'

function Contacts({ contacts, updateContacts }) {

    const [view, setView] = useState('list')
    const [detail, setDetail] = useState({})

    function handleDetail(id) {
        return async () => {
            // alert("Detail View and Delete Functionalities will be implemented tomorrow")
            const r = await fetch(`http://laozi.in:8000/contacts/${id}`)
            const d = await r.json()
            setView('detail')
            setDetail(d)
            console.log(d)
        }
    }

    function handleDelete(id) {
        return async () => {
            const r = await fetch(`http://laozi.in:8000/contacts/${id}`, {
                method: "DELETE"
            })
            console.log(r)
            console.log(await r.json())
            setView("list")
            updateContacts()
        }
    }

    return (
        <div>
            {view === "list" && contacts.map(c => <div onClick={handleDetail(c.id)} className="contact" key={c.id}>{c.name}</div>)}
            {view === "detail" && detail && (
                <div>
                    <div><b>NAME: </b>{detail.name}</div>
                    <div><b>EMAIL: </b>{detail.email}</div>
                    <div><b>PHONE: </b>{detail.phone}</div>
                    <br/>
                    <button onClick={()=>setView("list")}>Back</button>
                    <button onClick={handleDelete(detail.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default Contacts
