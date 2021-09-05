import React from 'react'
import {useServerResponse} from './Cache.client';
import {useLocation} from './LocationContext.client'


function ContactList({ contacts }) {

    const location = useLocation()
    const response = useServerResponse(location)
    return <><div>
        {contacts.map(c => <div key={c.id}>{c.name}</div>)}
    </div>
    {response.readRoot()}
    </>
}

export default ContactList
