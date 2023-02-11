import React from 'react'

const BoilingVerdict = ({ celsius }) => {
	return <p>{celsius >= 100 ? 'Вода кипит' : 'Вода не закипит'}</p>
}

export default BoilingVerdict
