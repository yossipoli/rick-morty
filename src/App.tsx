import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'
import * as API from './DAL/Api'
import { Character } from './types/character'
import { Box, Modal } from '@mui/material'
import MediaCard from './components/MediaCard'
import Paging from './components/Paging'

function App() {
	const [characters, setCharacters] = useState([])
	const [selectedCharacter, setSelectedCharacter] = useState<Character>()
	const [currentPage, setCurrentPage] = useState(1)
	const [pagesCount, setPagesCount] = useState(1)

	useEffect(() => {
		;(async () => {
			const { characterList, pages } = await API.getCharacters()
			setPagesCount(pages)
			setCharacters(characterList)
		})()
	}, [])

	const selectCharacter = (character: Character) => {
		setSelectedCharacter(character)
	}
	const unselectCharacter = () => setSelectedCharacter(undefined)

	const handlePageChange = async (newPage: number) => {
		const { characterList, pages } = await API.getCharacters(newPage)
		setPagesCount(pages)
		setCharacters(characterList)
		setCurrentPage(newPage)
	}

	return (
		<div>
			<header className='main'>
				<Table
					characters={characters}
					onSelectCharacter={selectCharacter}
				/>

				<Paging
					count={pagesCount}
					page={currentPage}
					handlePageChange={handlePageChange}
				/>

				<Modal
					open={!!selectedCharacter}
					onClose={unselectCharacter}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
					className='media-card'>
					<Box className='media-card'>
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
