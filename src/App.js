import React from 'react'
import Header from './components/Header'
import Home from './Pages/Home'
import './App.css'
import Account from './Pages/Account'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Account' element={<Account/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App