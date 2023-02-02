import React from 'react'

const List = () => {
	const numbers = [1, 2, 3, 4, 5]
	return (
		<>
			<ul>
				{numbers.map(n => (
					<li key={n.toString()}>{n * 2}</li>
				))}
			</ul>
		</>
	)
}

export default List
