import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({ products }) => {
	const [filterText, setFilterText] = useState('')
	const [inStockOnly, setInStockOnly] = useState(false)

	const handleFilterTextChange = filterTextValue => {
		setFilterText(filterTextValue)
	}

	const handleInStockChange = inStockOnlyValue => {
		setInStockOnly(inStockOnlyValue)
	}

	return (
		<div>
			<SearchBar
				filterText={filterText}
				inStockOnly={inStockOnly}
				onFilterTextChange={handleFilterTextChange}
				onInStockChange={handleInStockChange}
			/>
			<ProductTable
				products={products}
				filterText={filterText}
				inStockOnly={inStockOnly}
			/>
		</div>
	)
}

export default FilterableProductTable
