
import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'
import * as API from './DAL/Api'
import { Character } from './types/character'
import { Box, Modal } from '@mui/material'
import MediaCard from './components/MediaCard'
import Paging from './components/Paging'
import Search from './components/Search'

function App() {
	const [characters, setCharacters] = useState<Character[]>([])
	const [selectedCharacter, setSelectedCharacter] = useState<Character>()
	const [currentPageParams, setCurrentPageParams] = useState<API.QueryParams>(
		{}
	)
	const [pagesCount, setPagesCount] = useState<string>('1')

	useEffect(() => {
		;(async () => {
			const { results, info } = await API.getCharacters({})
			setPagesCount(info.pages)
			setCharacters(results)
		})()
	}, [])

	const selectCharacter = (character: Character) => {
		setSelectedCharacter(character)
	}
	const unselectCharacter = () => setSelectedCharacter(undefined)

	const handleQueryParamsChange = async (queryParams: API.QueryParams) => {
		const { results, info } = await API.getCharacters(queryParams)
		setPagesCount(info.pages)
		setCharacters(results)
		setCurrentPageParams(queryParams)
	}

	return (
		<div>
			<main className='main'>
				<Search
					currentQueryParams={currentPageParams}
					handleSearch={handleQueryParamsChange}
				/>

				{pagesCount === '0' ? (
					<h3>Not Found</h3>
				) : (
					<>
						<Table
							characters={characters}
							onSelectCharacter={selectCharacter}
						/>

						<Paging
							count={pagesCount}
							currentQueryParams={currentPageParams}
							handleQueryParamsChange={handleQueryParamsChange}
						/>
					</>
				)}

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
			</main>
		</div>
	)
}

export default App

