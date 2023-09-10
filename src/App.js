import { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css'
import ListView from './components/ListView';
import translations from './store/translations'

const apiKey = 'ae511409-8c0e-40ed-9336-aebcb602823d';

function App() {
  const [candidateData, setCandidateData] = useState({})

  
  useEffect(async () => {
    const categories = {
      'Applied': [],
      'Accepted': [],
      'Rejected': []
    }
    try{
      let res = await axios.get(`https://run.mocky.io/v3/${apiKey}`)
      console.log()
      res.data.data.forEach(item => {
        let category = item['status']
        console.log(category)
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
        <ListView type="applied" candidatesList={candidateData[translations['applied']]}/>
        <ListView type="accepted" candidatesList={candidateData[translations['accepted']]}/>
        <ListView type="rejected" candidatesList={candidateData[translations['rejected']]}/>
      </div>
    </div>
  )
}

export default App;
