import React from 'react'

const Card = ({image,company,offer,designation,duration,level,salary,location}) => {
  return (
    <div className='jobCard'>
       <div className="top">
            <img src={image} alt={company}></img>
            <button>Save <i className="fa-regular fa-bookmark"></i></button>
       </div>

       <div className="company">
            <h3>{company}</h3>
            <p>{offer}</p>
       </div>

       <h2 className='designation'>{designation}</h2>

       <div className='position'>
            <p>{duration}</p>
            <p>{level}</p>
       </div>


       <hr>
       </hr>

       <div className="info">
            <div className="salary">
                <h3>{salary}</h3>
                <p>{location}</p>
            </div>

            <button>Apply Now</button>
       </div>
    </div>
  )
}

export default Card
