import React from 'react'

const FAQitem = ({question,answer}) => {
  return (
    <div>
      <div>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know.</p>        
      </div>

      <div>
        <details>
          <summary>
              {question}
          </summary>

          <p> {answer}</p>
        </details>
      </div>
      
    </div>
  )
}

export default FAQitem
