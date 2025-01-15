import React from 'react'
import { useDispatch } from 'react-redux'
import { UiActions } from '../store/ui-slice'


const Candidate = ({image, id, fullName, motto}) => {

  const dispatch = useDispatch()

  // open confirm vote modal
  const openCandidateModal = () => {
    dispatch(UiActions.openVoteCandidateModal())
  }

  return (
    <article className='candidate'>
        <div className="candidate__image">
            <img src={image} alt={fullName} />
        </div>
        <h5>{fullName.length > 20 ? fullName.substring(0, 20) + "..." : fullName}</h5>
        <small>{motto.length > 20 ? motto.substring(0, 25) + "..." : motto}</small>
        <button className="btn primary" onClick={openCandidateModal}>Vote</button>

    </article>
  )
}

export default Candidate