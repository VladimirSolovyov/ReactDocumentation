import React from 'react'
import styles from '../Resume.module.css'

const FullName = ({ fullName }) => {
	return <div className={styles.fullName}>{fullName}</div>
}

export default FullName
