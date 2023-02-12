import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const ProductTable = () => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Price</td>
					</tr>
				</thead>
				<tbody>
					<ProductCategoryRow category={'Sporting Goods'} />
					<ProductRow name='Football' price='$49.99' />
					<ProductRow name='Basketball' price='$29.99' />
					<ProductCategoryRow category={'Electronics'} />
					<ProductRow name='iPod Touch' price='$99.99' />
					<ProductRow name='iPhone 5' price='$399.99' />
					<ProductRow name='Nexus 7' price='$199.99' />
				</tbody>
			</table>
		</div>
	)
}

export default ProductTable
