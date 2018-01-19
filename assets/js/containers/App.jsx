import React from 'react'
import Button from 'react-toolbox/lib/button/Button'
import Background from '../components/Background'
import Header from './Header'
import Content from '../components/Content'


const App = () => (
  <div>
    <Background src="/images/bg.webp" />
    <Header />
    <Content />
    <Button label="Primary Button" />
  </div>
)
export default App
