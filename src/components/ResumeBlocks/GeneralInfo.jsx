import React from 'react'
import styles from '../Resume.module.css'
import moment from 'moment'
import 'moment/locale/ru'

const GeneralInfo = ({ dateOfBirth, sex }) => {
	let momentObj = moment(dateOfBirth, 'DD.MM.YYYY').locale('ru'),
		momentString = momentObj.format('DD MMMM YYYY'),
		years = moment(dateOfBirth, 'DD.MM.YYYY').fromNow().split(' ')[0]

	return (
		<div>
			<span className={styles.partTitle}>Общая информация:</span>
			{sex === '1' ? 'Мужчина' : 'Женщина'}, {years} год, родился {momentString}
		</div>
	)
}

export default GeneralInfo
