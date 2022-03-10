import React, { useState } from 'react'

export default function About() {
  const [myStyle, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  })
  const [enableDark, disableDark] = useState('Enable Dark')

  const darkMode = () => {
    if (myStyle.color === 'black') {
      let blackTheme = {
        color: 'white',
        backgroundColor: 'gray',
      }
      disableDark('Disable Dark')
      setStyle(blackTheme)
      console.log('ur using black theme')
    } else if (myStyle.color === 'white') {
      let whiteTheme = {
        color: 'black',
        backgroundColor: 'white',
      }
      disableDark('Enable Dark')
      setStyle(whiteTheme)
      console.log('ur using white theme')
    }
  }
  return (
    <div className="container my-5" style={myStyle}>
      <h1>ABOUT US</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Don't use Hallo or hi use
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <h3>Salamualaikum </h3>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              About me
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <h5>
                Hello how are you I am under the wator please help me here to
                much raining
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <button type="button" className="btn btn-dark" onClick={darkMode}>
          {enableDark}
        </button>
      </div>
    </div>
  )
}
