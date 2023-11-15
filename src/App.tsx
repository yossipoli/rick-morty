import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/DataTable'
import * as API from './DAL/Api'
import { Character, CharactersResponse, QueryParams } from './types/character'
import { ThemeProvider } from '@mui/material/styles'
import { Box, Modal } from '@mui/material'
import MediaCard from './components/MediaCard'
import PageController from './components/PageController'
import Search from './components/Search'
import Loader from './components/Loader'
import darkTheme from './theme'

const App = () => {
	const [charactersData, setCharactersData] = useState<CharactersResponse>()
	const [selectedCharacter, setSelectedCharacter] = useState<Character>()
	const [currentParams, setCurrentParams] = useState<QueryParams>({})

	useEffect(() => {
		;(async () => {
			setCharactersData(await API.getCharacters({}))
		})()
	}, [])

	const selectCharacter = (character: Character) => {
		setSelectedCharacter(character)
	}
	const unselectCharacter = () => setSelectedCharacter(undefined)

	const handleQueryParamsChange = async (queryParams: QueryParams) => {
		setCharactersData(await API.getCharacters(queryParams))
	}

	useEffect(() => {
		handleQueryParamsChange(currentParams)
	}, [JSON.stringify(currentParams)])

	return (
		<div className='App'>
			<ThemeProvider theme={darkTheme}>
				<div className='title'>
					<div className='logo'>
						<img
							src='./../rick_and_morty_logo.png'
							alt='Rick and Morty Logo'
						/>
					</div>
				</div>
				<header className='header'>
					<Search
						currentQueryParams={currentParams}
						handleSearch={setCurrentParams}
					/>
				</header>
				<main className='main'>
					{charactersData?.info.pages === 0 ? (
						<h3>Not Found</h3>
					) : charactersData?.results.length ? (
						<>
							<Table
								characters={charactersData.results}
								onSelectCharacter={selectCharacter}
							/>

							<PageController
								count={charactersData.info.pages}
								currentQueryParams={currentParams}
								handleQueryParamsChange={(newPageParam) =>
									setCurrentParams(newPageParam)
								}
							/>
						</>
					) : (
						<Loader />
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
			</ThemeProvider>
		</div>
	)
}

export default App
