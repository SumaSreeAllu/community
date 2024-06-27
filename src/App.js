import React from 'react'
import Home from './Home'
import Slider from './Slider'
import Info from './Info'

const App = () => {
  return (
    <div>
      <div className='header'>
        <Home/>
      </div>
      <div className='Slider'>
        <Slider/>
      </div>
      <div className='info'>
        <Info/>
      </div>
    </div>
  )
}

export default App
