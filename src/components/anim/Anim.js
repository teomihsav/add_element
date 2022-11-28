import React from 'react'

import logo from '../../assets/header-logo-abalta.svg'
import style from './Anim.module.css'

const Anim = () => {
  return (
    <div styles={{ marginTop: '5rem', fontSize: '5rem' }}><img className={`${style.rotate} ${style.leftRight}`} src={logo} alt='logo'></img></div>
  )
}

export default Anim