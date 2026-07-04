import React from 'react'
import Card from './components/Card'


const jobOpenings = [
  {
    id:1,
    image:"https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company:"Amazon",
    offerTime: "3 days ago",
    designation: "Backend Developer",
    duration: "Full-Time",
    level: "Mid Level",
    salary: "$50/hour",
    location: "Karachi,Pakistan"
  },
  {
    id:2,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbO8Q066Ay2dusuIW2kei_K7-DaiSqduBZwUQ0D0EDde6BSP2Vqkpom5Q&s=10",
    company:"Meta",
    offerTime: "5 days ago",
    designation: "UI/UX Designer",
    duration: "Part-Time",
    level: "Junior Level",
    salary: "$35/hour",
    location: "Rawalpindi,Pakistan"
  },
  {
    id:3,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqBCl92-9ug8ad3PHtsqtNUKg7qhSw-zZBAyfDhu2rQ&s=10",
    company:"Google",
    offerTime: "7 days ago",
    designation: "Full Stack Developer",
    duration: "Full-Time",
    level: "Senior Level",
    salary: "$100/hour",
    location: "Karachi,Pakistan"
  },
  {
    id:4,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/500px-Microsoft_logo.svg.png",
    company:"Microsoft",
    offerTime: "15 days ago",
    designation: "AI Engineer",
    duration: "Full-Time",
    level: "Mid-Level",
    salary: "$75/hour",
    location: "Lahore,Pakistan"
  },
  {
    id:5,
    image:"https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    company:"Netflix",
    offerTime: "2 days ago",
    designation: "Front End Developer",
    duration: "Internship",
    level: "Junior Level",
    salary: "$20/hour",
    location: "Karachi,Pakistan"
  },
  {
    id:6,
    image:"https://dxc.scene7.com/is/image/dxc/hp_1050x1050?qlt=90&wid=1200&ts=1749506259261&$square_desktop$&dpr=off",
    company:"HP",
    offerTime: "3 days ago",
    designation: "Human Resources",
    duration: "Full-Time",
    level: "Senior Level",
    salary: "$25/hour",
    location: "Karachi,Pakistan"
  },
]


const App = () => {
  console.log(jobOpenings);
  return (
    <div className="jobsContainer">
      {jobOpenings.map((job)=>
      (
        <Card key= {job.id} image= {job.image} company={job.company} offer={job.offerTime} designation={job.designation} duration={job.duration} level={job.level} salary={job.salary} location={job.location}/>
      ))
      }

    </div>

  )
}

export default App
