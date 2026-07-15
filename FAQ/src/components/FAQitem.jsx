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


      <div className="overflow-hidden rounded-2xl bg-[#f2e9e4] transition-all duration-300 hover:shadow-xl ">
        <button onClick={toggle} className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold cursor-pointer hover:bg-[#e9d8cf] transition-colors duration-200">{show ? "-" : "+"} {question}</button>
        {show && <p className="border-t border-gray-300 px-6 py-4 text-gray-700 leading-7">{answer}</p>}
      </div>
      
    </div>
  )
}

export default FAQitem
