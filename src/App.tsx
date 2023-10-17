import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Form from './components/Form'
import Complete from './components/Complete'

const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/request-form' element={<Form />} />
        <Route path='/complete/:branch' element={<Complete />} />
      </Routes>
    </>
  )
}

export default App
