import React from 'react'
import { useState } from 'react'

function TextForm(props) {
  // state
  const [firstState, secondState] = useState('write here')

  const changeFunction = (text) => {
    // on change function
    secondState(text.target.value)
  }

  const uppercaseFunction = () => {
    //uppercase function
    let newText = firstState.toUpperCase()
    props.Alert('Converted to UpperCase', 'success')
    secondState(newText)
  }

  const delFunction = () => {
    //delete function
    props.Alert('Text deleted ', 'success')
    secondState('')
  }

  return (
    <>
      <div className="container">
        <div className="mb-3">
          {/* text heading start here  */}
          <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            Enter your text
          </h2>

          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === 'dark' ? '#525c63' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            id="myBox"
            rows="12"
            value={firstState}
            onChange={changeFunction}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-info mx-3"
          onClick={uppercaseFunction}
        >
          Convert To Uppercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={delFunction}
        >
          Delete
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === 'light' ? 'dark' : 'light'
        }`}
      >
        <h2>Text Summary</h2>
        <p>Number of char: {firstState.length}</p>
        <p>Number of word: {firstState.split(' ').length}</p>
        <p>
          {firstState.length - firstState.split(' ').length} Letter Without
          Space
        </p>
        {/* <h5>{0.008 * firstState.split(' ').length} Minutes to Read</h5> */}
      </div>
    </>
  )
}

export default TextForm
