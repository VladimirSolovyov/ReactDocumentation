import React from 'react'

const ProductRow = ({ product }) => {
	const nameField = product.stocked ? (
		product.name
	) : (
		<span style={{ color: 'red' }}>{product.name}</span>
	)
	return (
		<tr>
			<td>{nameField}</td>
			<td>{product.price}</td>
		</tr>
	)
}

export default ProductRow
