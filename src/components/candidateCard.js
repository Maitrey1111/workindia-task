import React from 'react'
import icon from '../assets/icons/18x18.png'
import '../assets/styles/CandidateCard.css'

function CandidateCard({candidate}) {
  return (
    <div className="candidate-card">
        <h3 className='card-title'>{candidate.name}</h3>
        <div className='row-text-icon'>
            <img src={icon} alt='icon' width='20px' height='20px'/>
            <p>{candidate['last_updated_at']}</p>
        </div>
        <div className='row-text-icon'>
            <img src={icon} alt='icon' width='20px' height='20px'/>
            <p>{candidate['location']}</p>
        </div>
        <div className='row-text-icon'>
            <img height="20" width="20" className="img-responsive img-portfolio img-hover" src="https://via.placeholder.com/18x18" alt=""/>                
            <p>{candidate['gender']}</p>
        </div>
    </div>
  )
}

export default CandidateCard