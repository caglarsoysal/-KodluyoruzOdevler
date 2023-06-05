import React from 'react'
import styles from './styles.module.css'

export const Buttons = (props) => {
  return <button {...props} className={`${styles.btn} ${styles[props.color]} ${styles[props.type]}`}>{props.text}</button>
}