import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavbarComp from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Works from './pages/Works'
import Home from './pages/Home'
import Project from './components/Project/'
import { createContext, useState } from 'react'
import ThemeContext from './theme/themecontext'


const App = () => {
  
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme)
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme)
  }

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <NavbarComp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:slug" element={<Project />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Router>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root')) 