import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCashAction, getCashAction } from '../store/cashReducer'

const Cash = () => {
	const dispatch = useDispatch()
	const cash = useSelector(state => {
		return state.cash.cash
	})

	const addCash = cash => {
		dispatch(addCashAction(cash))
	}

	const getCash = cash => {
		dispatch(getCashAction(cash))
	}

	return (
		<div>
			<span>Количество денег: {cash}</span>
			<div>
				<button onClick={() => addCash(Number(prompt()))}>
					Пополнить счёт
				</button>
				<button onClick={() => getCash(Number(prompt()))}>
					Снять со счёта
				</button>
			</div>
		</div>
	)
}

export default Cash
