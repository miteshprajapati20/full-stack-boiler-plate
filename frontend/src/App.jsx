import { Routes , Route} from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'

function App() {

  return (
    <div className='app-container'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
