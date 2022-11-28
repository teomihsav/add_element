import React from 'react'

import logo from '../../assets/logo.png'
import style from './Anim.module.css'

const Anim = () => {
  return (
    <div styles={{ marginTop: '5rem', fontSize: '5rem' }}><img className={`${style.rotate}`} src={logo} alt='logo'></img></div>
  )
}

export default Anim