import React from 'react'
import styles from '../Resume.module.css'

const Avatar = ({ avatar, name }) => {
	return (
		<div>
			<img className={styles.avatar} src={avatar} alt={name} />
		</div>
	)
}

export default Avatar
