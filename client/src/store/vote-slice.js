import { createSlice} from '@reduxjs/toolkit'



const currentVoter = {id: "v1", token: "sgddkadvb", isAdmin: true}
const initialState = {selectedVoteCandidate: "", currentVoter, selectedElection: "", idOfElectionToUpdate: "", addCandidateElectionId: ""}


const voteSlice = createSlice({
    name: "vote",
    initialState: initialState,
    reducers:  {
        changeSelectedVoteCandidate(state, action) {
            state.selectedVoteCandidate = action.payload;
        },
        changeSelectedElection(state, action) {
            state.selectedElection = action.payload;
        },
        changeIdOfCandidateId(state, action) {
            state.addCandidateElectionId = action.payload;
        },
        changeAddCandidateElectionId(state, action) {
            state.addCandidateElectionId = action.payload;
        }
    }
})

export const  voteActions = voteSlice.actions

export default voteSlice