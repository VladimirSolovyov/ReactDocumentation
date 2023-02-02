import React from 'react'
import styles from '../Resume.module.css'

const Contacts = ({ phone, mail }) => {
	return (
		<div>
			<span className={styles.partTitle}>Контакты:</span>
			<ul>
				<li>{phone}</li>
				<li>{mail}</li>
			</ul>
		</div>
	)
}

export default Contacts
