import Thumbnail1 from './assets/apple.jpg'
import Thumbnail2 from './assets/audi.jpg'
import Thumbnail3 from './assets/boat.jpg'
import Candidate1 from './assets/candidate1.jpg'
import Candidate2 from './assets/candidate2.jpg'
import Candidate3 from './assets/candidate3.jpg'
import Candidate4 from './assets/candidate4.jpg'
import Candidate5 from './assets/candidate5.jpg'
import Candidate6 from './assets/candidate6.jpg'

export const elections = [
    {
        id: "e1",
        title: "Harvard Presidential Elections 2024",
        description: "Prosident fwiouvnerv wejqrobn vqrgbnrv rbonrgrqgbnbewghlbn aegrgqnb qgnqrbnreb\
        wqegrqg q34ggbqrgbq grqeg",
        thumbnail: Thumbnail1, 
        candidates: ["c1", "c2", "c3", "c4"],
        voters: []
    },
    {
        id: "e2",
        title: "Legion SRC Elections 2024",
        description: "Prosident fwiouvnerv wejqrobn vqrgbnrv rbonrgrqgbnbewghlbn aegrgqnb qgnqrbnreb\
        wqegrqg q34ggbqrgbq grqeg",
        thumbnail: Thumbnail2, 
        candidates: ["c1", "c2", "c3"],
        voters: []
    },
    {
        id: "e3",
        title: "Stanford Presidential Elections 2024",
        description: "Prosident fwiouvnerv wejqrobn vqrgbnrv rbonrgrqgbnbewghlbn aegrgqnb qgnqrbnreb\
        wqegrqg q34ggbqrgbq grqeg",
        thumbnail: Thumbnail3, 
        candidates: [],
        voters: []
    },
]

export const candidates = [
    {
        id: "c1",
        fullName: "Enoch Ganyo",
        image: Candidate1,
        motto: "nkkrwf frgbqribjr wervbqrvbn web3rqbe q3rg34gqe qerbb erg rbebb gergqb",
        voteCount: 23, 
        election: "e1"
    },
    {
        id: "c2",
        fullName: "John Asiama",
        image: Candidate2,
        motto: "nkkrwf frgbqribjr wervbqrvbn web3rqbe q3rg34gqe qerbb erg rbebb gergqb",
        voteCount: 18, 
        election: "e1"
    },
    {
        id: "c3",
        fullName: "Dora Stephenson",
        image: Candidate3,
        motto: "nkkrwf frgbqribjr wervbqrvbn web3rqbe q3rg34gqe qerbb erg rbebb gergqb",
        voteCount: 3, 
        election: "e2"
    },
    {
        id: "c4",
        fullName: "Chaiman Wabetumi",
        image: Candidate4,
        motto: "nkkrwf frgbqribjr wervbqrvbn web3rqbe q3rg34gqe qerbb erg rbebb gergqb",
        voteCount: 9, 
        election: "e1"
    },
    {
        id: "c5",
        fullName: "Andile Dovu",
        image: Candidate5,
        motto: "nkkrwf frgbqribjr wervbqrvbn web3rqbe q3rg34gqe qerbb erg rbebb gergqb",
        voteCount: 5, 
        election: "e1"
    },
    {
        id: "c6",
        fullName: "Chumani me",
        image: Candidate6,
        motto: "nkkrwf frgbqribjr wervbqrvbn web3rqbe q3rg34gqe qerbb erg rbebb gergqb",
        voteCount: 1, 
        election: "e2"
    },

]

export const voters = [
    {
        id: "v1",
        fullName: "Ernest Achiever",
        email: "achiever123@gmail.com",
        password: "achiever123",
        isAdmin: true,
        votedElections: ["e2"]

    },
    {
        id: "v2",
        fullName: "Doris Lartey",
        email: "doris@gmail.com",
        password: "doris123",
        isAdmin: false,
        votedElections: ["e2", "e1"]

    },
    {
        id: "v3",
        fullName: "Daniel Vinyo",
        email: "danieklk@gmail.com",
        password: "dannie",
        isAdmin: false,
        votedElections: ["e1", "e2"]

    },
    {
        id: "v4",
        fullName: "Aphelele Mthunzi",
        email: "ap@gmail.com",
        password: "ap23",
        isAdmin: true,
        votedElections: []

    },
    
    
    
    
]

