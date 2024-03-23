import React from 'react'

export default function Alert(props) {
  return (
    props.text && <div className='container mt-2'>
        <div className="alert alert-success" role="alert">
      <strong>{props.text}</strong>
        </div>
    </div>
  )
}
