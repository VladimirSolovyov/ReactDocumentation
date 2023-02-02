import React, { useEffect, useState } from 'react'

const EffectExample = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		document.title = `Вы нажали ${count} раз`
	}, [count])

	return (
		<div>
			<p>Количество нажатий на кнопку: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment count</button>
		</div>
	)
}

export default EffectExample
