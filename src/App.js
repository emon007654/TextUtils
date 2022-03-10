// import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'
// import About from './components/About'
import React, { useState } from 'react'
import Alerts from './components/Alerts'

function App() {
  const [theme, setTheme] = useState('light') // theme

  const [alert, setAlert] = useState(null) // alert

  const showAlert = (massage, type) => {
    // alert function
    setAlert({
      firstObja: massage,
      secondObja: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  } // alert function end

  const toggleMode = () => {
    //theme function start
    if (theme === 'light') {
      document.body.style.backgroundColor = '#11293b'
      setTheme('dark')
      showAlert('dark mode enabled ', 'success ')
    } else if (theme === 'dark') {
      document.body.style.backgroundColor = 'white'
      setTheme('light')
      showAlert('light mode enabled ', 'success')
    }
  } // theme function end

  return (
    <>
      <NavBar title="TextUtils" mode={theme} toggleMode={toggleMode} />

      <Alerts alert={alert} />

      {/* <About />  component*/}

      <div className="container my-3">
        <TextForm heading="Enter your Text " mode={theme} Alert={showAlert} />
      </div>
    </>
  )
}

export default App
