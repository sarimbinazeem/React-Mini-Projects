import React from 'react'
import FAQ from './components/FAQ'
import faqdata from './data/faqData'

const App = () => {
  return (
    <div>
      <FAQ  data={faqdata}/>
    </div>
  )
}

export default App
