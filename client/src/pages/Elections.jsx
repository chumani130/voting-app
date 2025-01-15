import React, {useState} from 'react'
import { elections as dummyElections }from '../data'
import Election from '../components/Election'

const Elections = () => {

  const [elections, setElections] = useState(dummyElections)
  return (
    <section className="elections">
      <header className="container elections__container">
        <h1>Ongoing Elections</h1>
        <button className="btn primary">Create New Election</button>
      </header>
      <menu className="election__menu">
        {
          elections.map(election => <Election key={election.id} {...election} /> )
        }
      </menu>
    </section>
  )
}

export default Elections
