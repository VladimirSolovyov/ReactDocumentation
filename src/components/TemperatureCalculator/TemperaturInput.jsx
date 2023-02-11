import React, { useState } from 'react'

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
	const scaleNames = {
		c: 'Цельсия',
		f: 'Фаренгейта',
	}

	return (
		<div>
			<fieldset>
				<legend>Введите температуру в градусах {scaleNames[scale]}</legend>
				<input
					value={temperature}
					onChange={event => {
						onTemperatureChange(event.target.value)
					}}
				/>
			</fieldset>
		</div>
	)
}

export default TemperatureInput
