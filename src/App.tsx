import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/DataTable'
import * as API from './DAL/Api'
import { Character, QueryParams } from './types/character'
import { Box, Modal, ThemeProvider, Typography } from '@mui/material'
import MediaCard from './components/MediaCard'
import PageController from './components/PageController'
import Search from './components/Search'
import Loader from './components/Loader'

const App = () => {
	const [characters, setCharacters] = useState<Character[]>([])
	const [selectedCharacter, setSelectedCharacter] = useState<Character>()
	const [currentParams, setCurrentParams] = useState<QueryParams>({})
	const [pagesCount, setPagesCount] = useState<number>(1)

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

	const handleQueryParamsChange = async (queryParams: QueryParams) => {
		const { results, info } = await API.getCharacters(queryParams)
		setPagesCount(info.pages)
		setCharacters(results)
	}

	useEffect(() => {
		handleQueryParamsChange(currentParams)
	}, [JSON.stringify(currentParams)])

	return (
		<div className='App'>
			<Loader />
			<div className='logo'>
				<img
					src='./../rick_and_morty_logo.png'
					alt='Rick and Morty Logo'
				/>
			</div>
			<header className='header'>
				<Search
					currentQueryParams={currentParams}
					handleSearch={setCurrentParams}
				/>
			</header>
			<main className='main'>
				{pagesCount === 0 ? (
					<h3>Not Found</h3>
				) : (
					<>
						<Table
							characters={characters}
							onSelectCharacter={selectCharacter}
						/>

						<PageController
							count={pagesCount}
							currentQueryParams={currentParams}
							handleQueryParamsChange={setCurrentParams}
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
