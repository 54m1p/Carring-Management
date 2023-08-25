import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/home/Home'
import AboutPage from './components/about/about'
import Services from './components/services/Services'
import Blogs from './components/blog/Blogs'
import Contact from './components/contact/Contact'

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
              <Route path ="/" element ={<HomePage/>} ></Route>
              <Route path ="/Home" element ={<HomePage/>} ></Route>
              <Route path ="/About" element ={<AboutPage/>} ></Route>
              <Route path ="/Services" element ={<Services/>} ></Route>
              <Route path ="/Blogs" element ={<Blogs/>} ></Route>
              <Route path ="/Contact" element ={<Contact/>} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
