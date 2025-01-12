
import {Routes ,Route} from 'react-router-dom'


import Home from './components/home/Home'
import Login from './components/login/Login'
import Header from './components/header/Header'
import Register from './components/register/Register'
import Create from './components/create/Create'
import Edit from './components/edit/Edit'
import Details from './components/details/Details'
import Catalogue from './components/catolgue/Catalogue'

function App() {
  

  return (
    <div id='box'>
    <Header />
    <main id="main-content">
  
    <Routes>
      <Route  path='/' element ={<Home />}/>
      <Route  path='/login' element ={<Login/>}/>
      <Route  path='/register' element ={<Register/>}/>
      <Route  path='/create-game' element ={<Create/>}/>
      <Route  path='/details/:id' element={<Details/>} />
      <Route  path='/games' element={<Catalogue />} />
    </Routes>

    </main>
     
    </div>
  )
}

export default App
