import React from 'react'
import FAQ from './components/FAQ'
import faqData from './data/faqData'

const App = () => {
  return (
    <div>
      <FAQ  faqData={faqData}/>
    </div>
  )
}

export default App
