import React from 'react'
import avatar from '../images/avatar.jpeg'
import styles from './Resume.module.css'

//===Children components
import Avatar from './ResumeBlocks/Avatar'
import Contacts from './ResumeBlocks/Contacts'
import FullName from './ResumeBlocks/FullName'
import GeneralInfo from './ResumeBlocks/GeneralInfo'

const Resume = ({ fullName, dateOfBirth, mail, phone, sex }) => {
	return (
		<div className={styles.wrapper}>
			<div>
				<FullName fullName={fullName} />
				<GeneralInfo dateOfBirth={dateOfBirth} sex={sex} />
				<Contacts phone={phone} mail={mail} />
			</div>
			<Avatar avatar={avatar} name={fullName} />
		</div>
	)
}

export default Resume
