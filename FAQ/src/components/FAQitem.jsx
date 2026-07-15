import React from 'react'
import { useState } from 'react'

const FAQitem = ({question,answer}) => {


  const [show,setShow] = useState(false)

  const toggle= () =>
  {
    setShow(prev => !prev);

  }

  return (
    <div>


      <div>
        <button onClick={toggle}>{show ? "-" : "+"} {question}</button>
        {show && <p>{answer}</p>}
      </div>
      
    </div>
  )
}

export default FAQitem
