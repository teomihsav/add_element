
import React, { useState } from 'react'

import DivField from './DivField'

const AddField = () => {

  const [add, addSet] = useState([])

  const remove = (id) => {
    const res = add.filter(el => el.id !== id)
    addSet(res)
  }

  const addField = () => {
    addSet([
      ...add, {
        id: Math.floor((1 + Math.random()) * 0x10000),
      }
    ]
    )
  }

  return (
    <div>
      <div
        onClick={addField}
        style={{ border: "2px solid lightblue", textAlign: 'center', fontSize: '1.5rem', width: '150px', height: ' 40px' }}
      >
        Click me
      </div>

      {
        add.map(el => <DivField key={el.id} id={el.id} remove={remove} />)
      }
    </div>
  )
}

export default AddField