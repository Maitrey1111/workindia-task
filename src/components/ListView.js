import React from 'react'
import CandidateCard from './CandidateCard'
import translations from '../store/translations'
import '../assets/styles/ListView.css'

function ListView({type, candidatesList}) {
  return (
    <div className='col-list'>
        <h1 className='title-col'>{translations[type]}</h1>
        <div className='list-vertical'>
            {
                candidatesList  ? 
                    candidatesList.map((candidate, index) => {
                        return (
                            <div key={index}>
                                <CandidateCard candidate={candidate} />
                            </div>
                        )
                    })
                : false
            }
        </div>
    </div>
  )
}

export default ListView