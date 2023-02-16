import React from 'react'

const SearchBar = ({
	filterText,
	inStockOnly,
	onFilterTextChange,
	onInStockChange,
}) => {
	return (
		<div>
			<input
				type='text'
				placeholder='Search...'
				value={filterText}
				onChange={e => onFilterTextChange(e.target.value)}
			/>
			<input
				type='checkbox'
				id='flag'
				checked={inStockOnly}
				onChange={e => onInStockChange(e.target.checked)}
			/>
			<label htmlFor='flag'>Only show products in stock</label>
		</div>
	)
}

export default SearchBar
