import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/table'
import * as API from './DAL/Api'

function App() {
	const [characters, setCharacters] = useState([])
	useEffect(() => {
		;(async () => {
			setCharacters(await API.getCharacters())
		})()
	}, [])
	return (
		<div className='App'>
			<header className='App-header'>
				<Table rows={characters} />
			</header>
		</div>
	)
}

export default App
