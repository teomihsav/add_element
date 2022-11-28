import React from 'react'

const DivField = ({ id, remove }) => {
  return (
    <div
      key={id}
      style={{ cursor: 'pointer', border: "2px solid lightgreen", marginTop: '0.5rem', fontSize: '1.1rem', textAlign: 'center' }}
      onClick={() => remove(id)}
    >
      added {id}
    </div>
  )
}

export default DivField