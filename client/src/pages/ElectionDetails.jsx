import React from 'react'
import { elections } from '../data'
import { useParams } from 'react-router-dom'
import { candidates } from '../data'


const ElectionDetails = () => {

  const {id} = useParams()

  const currentElection = elections.find(election => election.id === id)

  const electionCandidates = candidates.filter(candidate => candidate.election === id)

  return (
    <section className="electionDetails">
      <div className="container electionDetails__container">
        <h2>{currentElection.title}</h2>
        <p>{currentElection.description}</p>
        <div className="electionDetails__image">
          <img src={currentElection.thumbnail} alt={currentElection.title} />
        </div>

        <menu className="electionDetails__candidates">
          {
            electionCandidates.map(candidate => <ElectionDetails key={candidate.id}
            {...candidate} />)
          }
        </menu>
      </div>
    </section>
  )
}

export default ElectionDetails