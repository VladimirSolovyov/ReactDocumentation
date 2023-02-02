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

// Списки и ключи!

function App() {
	return (
		<div className='App'>
			<Test name='Vladimir' />
			<Counter />
			<Cash />
			<ListClient />
			<Resume
				fullName='Соловьёв Владимир Борисович'
				sex='1'
				dateOfBirth='30.07.1991'
				phone='+7-930-031-04-99'
				mail='vovanchik3007@mail.ru'
			/>
			<EffectExample></EffectExample>
			<Clock />
			<MailBox unreadMsg={['hi', 'js']} />
			<List />
		</div>
	)
}

export default App
