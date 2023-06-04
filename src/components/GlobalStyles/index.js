import React from 'react'
import styles from './GlobalStyles.module.scss'

function GlobalStyles({ children }) {
  return <div className={styles.wrapper}>{children}</div>
}

export default GlobalStyles
