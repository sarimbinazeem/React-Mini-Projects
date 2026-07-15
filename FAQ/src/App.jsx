import React from 'react'
import FAQ from './components/FAQ'
import faqData from './data/faqData'

const App = () => {
  return (
    <>
    <div className="min-h-screen w-full flex items-center justify-center bg-[#22223b] p-8">
      <FAQ  faqData={faqData} />
    </div>
    </>
  )
}

export default App
