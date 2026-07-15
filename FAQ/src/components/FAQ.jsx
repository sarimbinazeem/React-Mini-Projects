import React from 'react'
import FAQItem from './FAQitem'

const FAQ = ({faqData}) => {
  return (
    <div>
      {
        faqData.map((data)=>{
          <FAQItem key={data.id} question={data.question} answer={data.answer} />
        })
      }
    </div>
  )
}

export default FAQ
