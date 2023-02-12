import React from 'react'

const SearchBar = () => {
	return (
		<div>
			<input type='text' placeholder='Search...' />
			<input type='checkbox' id='flag' />
			<label htmlFor='flag'>Only show products in stock</label>
		</div>
	)
}

export default SearchBar
