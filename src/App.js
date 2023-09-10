import { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css'
import ListView from './components/ListView';
import translations from './store/translations'

const dummy = [
    {
      "id": 1,
      "name": "Candidate 1",
      "last_updated_at": "10 minutes ago",
      "location": "HSR Layout",
      "gender": "Male",
      "status": "Applied"
    },
    {
      "id": 2,
      "name": "Candidate 2",
      "last_updated_at": "15 minutes ago",
      "location": "HSR Layout",
      "gender": "Male",
      "status": "Applied"
    },
    {
    "id": 3,
    "name": "Candidate 3",
    "last_updated_at": "2022/05/04",
    "location": "Koramangala",
    "gender": "Female",
    "status": "Accepted"
    },
    {
    "id": 4,
    "name": "Candidate 4",
    "last_updated_at": "2022/04/10",
    "location": "HSR Layout",
    "gender": "Male",
    "status": "Rejected"
    },
    {
    "id": 5,
    "name": "Candidate 5",
    "last_updated_at": "12 minutes ago",
    "location": "HSR Layout",
    "gender": "Male",
    "status": "Accepted"
    },
    {
    "id": 6,
    "name": "Candidate 6",
    "last_updated_at": "30 minutes ago",
    "location": "HSR Layout",
    "gender": "Male",
    "status": "Accepted"
    },
    {
    "id": 7,
    "name": "Candidate 7",
    "last_updated_at": "2 minutes ago",
    "location": "HSR Layout",
    "gender": "Male",
    "status": "Rejected"
    }
] 

const apiKey = 'ae511409-8c0e-40ed-9336-aebcb602823d';


function App() {
  const [candidateData, setCandidateData] = useState({})

  
  useEffect(() => {
    const categories = {
      'Applied': [],
      'Accepted': [],
      'Rejected': []
    }
    try{
      let res = axios.get(`https://run.mocky.io/v3/${apiKey}`)
      dummy.forEach(item => {
        const category = item['status'];
        if (categories.hasOwnProperty(category)) {
          categories[category].push(item)
        } else {
          console.warn(`Unknown category: ${category}`)
        }
      })
      setCandidateData(categories)
      console.log(candidateData)
    } catch(err) {
      console.error('Error fetching data')
    }
  }, [])

  return (
    <div className="App">
      <div className='dashboard'>
        {
          candidateData.map((type, data) => {
            return <ListView type={type} candidatesList={data}/>
          })
        }
        {/* <ListView type="accepted" candidatesList={candidateData[translations['accepted']]}/> */}
        {/* <ListView type="rejected" candidatesList={candidateData[translations['rejected']]}/> */}
      </div>
    </div>
  )
}

export default App;
