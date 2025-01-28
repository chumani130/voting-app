import React from 'react'
import { elections } from '../data'
import { useParams } from 'react-router-dom'
import { candidates } from '../data'
import{ voters } from '../data'


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

        <menu className="voters">
          <h2>Voters</h2>
          <table className="voters__table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {
                voters.map(voter => (
                  <tr key={voter.id}>
                    <td>{voter.fullname}</td>
                    <td>{voter.email}</td>
                    <td>14:43:33</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </menu>
      </div>
    </section>
  )
}

export default ElectionDetails