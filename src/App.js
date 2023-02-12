import React from 'react'

import Counter from './components/Counter'
import Test from './components/Test'
import ListClient from './components/ListClient'
import Cash from './components/Cash'
import Resume from './components/Resume'
import EffectExample from './components/EffectExample'
import Clock from './components/Clock'
import MailBox from './components/MailBox'
import List from './components/List'
import NameForm from './components/NameForm'
import Header from './components/UI/Header'
import Br from './components/UI/Br'
import Calculator from './components/TemperatureCalculator/Calculator'
import WelcomDialog from './components/CompositionVsInheritance/WelcomDialog'
import FilterableProductTable from './components/PhilosophyReact/FilterableProductTable'

// https://ru.reactjs.org/docs/thinking-in-react.html Шаг 4

function App() {
	return (
		<div className='App'>
			<Header title='Первые компоненты' />
			<Test name='Vladimir' />
			<Counter />
			<Br />
			<Header title='Запись данных и работа с запросами' />
			<Cash />
			<ListClient />

			<Resume
				fullName='Соловьёв Владимир Борисович'
				sex='1'
				dateOfBirth='30.07.1991'
				phone='+7-930-031-04-99'
				mail='vovanchik3007@mail.ru'
			/>
			<Br />
			<Header title='Обработка эффектов' />
			<EffectExample></EffectExample>
			<Clock />
			<MailBox unreadMsg={['hi', 'js']} />
			<List />
			<NameForm />
			<Br />
			<Header title='Подъём состояния' />
			<Calculator />
			<Br />
			<Header title='Композиция против наследования' />
			<WelcomDialog />
			<Br />
			<Header title='Итоги первой части' />
			<FilterableProductTable />
		</div>
	)
}

export default App
