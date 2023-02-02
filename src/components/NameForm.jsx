import React, { useState } from 'react'
//Для обработки форм используют Formik
const NameForm = () => {
	const [value, setValue] = useState('')

	return (
		<div>
			<form
				onSubmit={() => {
					alert('Send name: ' + value)
				}}
			>
				<label>
					Name:
					<input
						type='text'
						value={value}
						onChange={event => {
							setValue(event.target.value)
						}}
					/>
				</label>
				<input type='submit' value='Send' />
			</form>
		</div>
	)
}

export default NameForm
