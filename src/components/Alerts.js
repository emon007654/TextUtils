import React from 'react'

export default function Alerts(props) {
  const capitalize = (words) => {
    const lower = words.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }

  return (
    props.alert && (
      <div
        className={`alert alert-success alert-dismissible fade show `}
        role="alert"
      >
        <strong>{capitalize(props.alert.firstObja)} </strong>
        {/* {props.alert.secondObja} */}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    )
  )
}
