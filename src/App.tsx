import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'
import * as API from './DAL/Api'
import { Character } from './types/character'
import { Box, Modal } from '@mui/material'
import MediaCard from './components/MediaCard'

const style = {
	// 	position: 'absolute' as 'absolute',
	// 	top: '50%',
	// 	left: '50%',
	// 	transform: 'translate(-50%, -50%)',
	// 	width: 400,
	// 	bgcolor: 'background.paper',
	// 	border: '2px solid #000',
	// 	boxShadow: 24,
	// 	p: 4,
}

function App() {
	const [characters, setCharacters] = useState([])
	const [selectedCharacter, setSelectedCharacter] = useState<Character>()

	useEffect(() => {
		;(async () => {
			setCharacters(await API.getCharacters())
		})()
	}, [])

	const selectCharacter = (character: Character) => {
		setSelectedCharacter(character)
	}
	const unselectCharacter = () => setSelectedCharacter(undefined)

	return (
		<div className='App'>
			<header className='App-header'>
				<Table
					characters={characters}
					onSelectCharacter={selectCharacter}
				/>
				<Modal
					open={!!selectedCharacter}
					onClose={unselectCharacter}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'>
					<Box sx={style}>
						{selectedCharacter ? (
							<MediaCard character={selectedCharacter} />
						) : null}
					</Box>
				</Modal>
			</header>
		</div>
	)
}

export default App
