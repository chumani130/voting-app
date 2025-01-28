import React, {useState} from 'react'
import { elections as dummyElections }from '../data'
import Election from '../components/Election'
import AddElectionModal from '../components/AddElectionModal'
import { useDispatch } from 'react-redux'
import { UiActions } from '../store/ui-slice'
import { useSelector } from 'react-redux'

const Elections = () => {

  const [elections, setElections] = useState(dummyElections)

  const dispatch = useDispatch()

  // open add election modal
  const openModal = () => {
    dispatch(UiActions.openElectionModal())
  }

  const electionModalShowing = useSelector(state => state.ui.electionModalShowing)
  return (
   <>
    <section className="elections">
      <header className="container elections__header">
        <h1>Ongoing Elections</h1>
        <button className="btn primary" onClick={openModal}>Create New Election</button>
      </header>
      <menu className="elections__menu">
        {
          elections.map(election => <Election key={election.id} {...election} /> )
        }
      </menu>
    </section>
    {electionModalShowing && <AddElectionModal />}
   </>
  )
}

export default Elections
