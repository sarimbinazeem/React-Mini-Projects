import React from 'react'
import FAQItem from './FAQitem'

const FAQ = ({faqData}) => {
  return (
    <div>
        <div>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know.</p>        
      </div>
      {
        faqData.map((data)=>{
          return(
            <FAQItem key={data.id} question={data.question} answer={data.answer} />

          )
        })
      }
    </div>
  )
}

export default FAQ
