import { Route, Routes } from 'react-router-dom'
import './index.css'
import LoginForm from './components/loginForm'
import Signup from './components/SignupForm'
import Searchbar from './components/searchbar'
import WeatherCard from './components/WeatherCard'
function App() {
    return (
      <div className='w-[100vw] h-[100vh]'>

        <div id='bgImg'></div>

        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/weather' element={<WeatherCard/>}/>
        </Routes>

      </div>
    )
}

export default App
