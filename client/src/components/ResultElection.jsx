import React, { useState } from 'react'
import { candidates } from '../data'
import CandidateRating from './CandidateRating'

const ResultElection = ({id, thumbnail, title}) => {
    const [totalVotes, setTotalVotes] = useState(521)

    //get candidates that belong to this election iteration
    const electionCandidates = candidates.filter(candidate => candidate.election == id)

  return (
    <article className="result">
        <header className="result__header">
            <h4>{title}</h4>
            <div className="result__header-image">
                <img src={thumbnail} alt={title} />
            </div>
        </header>
            <ul className="result__list">
                {
                    electionCandidates.map(candidate => (<CandidateRating key=
                    {candidate.id} {...candidate} totalVotes={totalVotes} />))
                }
            </ul>
    </article>
  )
}

export default ResultElection