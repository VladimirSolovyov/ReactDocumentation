import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from '../asyncActions/customers'
import {
	addCustomerAction,
	removeCustomerAction,
} from '../store/customerReducer'

const ListClient = () => {
	const dispatch = useDispatch()

	const customers = useSelector(state => {
		return state.customers.customers
	})

	const addCustomers = name => {
		const customer = {
			name,
			id: Date.now(),
		}
		dispatch(addCustomerAction(customer))
	}

	const removeCustomer = customer => {
		dispatch(removeCustomerAction(customer))
	}

	return (
		<div>
			<h3>Список клиентов</h3>
			<button onClick={() => addCustomers(prompt())}>Добавить клиента</button>
			<button onClick={() => dispatch(fetchCustomers())}>
				Получить клиентов из БД
			</button>
			{customers.length > 0 ? (
				customers.map(customer => (
					<div key={customer.id} onClick={() => removeCustomer(customer)}>
						{customer.name}
					</div>
				))
			) : (
				<span>Нет клиентов</span>
			)}
		</div>
	)
}

export default ListClient
