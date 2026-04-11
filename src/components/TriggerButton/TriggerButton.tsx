import React from 'react'
import styles from './TriggerButton.module.css'

export const TriggerButton: React.FC = () => {
  return (
    <button className={styles.button}>
      Trigger
    </button>
  )
}