import React from 'react'
import FAQItem from './FAQitem'

const FAQ = ({faqData}) => {
  return (
      <div className="w-full max-w-3xl rounded-3xl bg-[#4a4e69] shadow-2xl p-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#f2e9e4]">Frequently Asked Questions</h2>
          <p className="mt-2 text-[#c9ada7]">Everything you need to know.</p>        
      </div>

      <div className="space-y-4">
        {
          faqData.map((data)=>{
            return(
              <FAQItem key={data.id} question={data.question} answer={data.answer} />

            )
          })
        }


      </div>
    </div>
  )
}

export default FAQ
