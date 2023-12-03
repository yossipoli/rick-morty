import { useEffect, useState } from 'react'
import './App.css'
import * as API from './DAL/Api'
import { Character, CharactersResponse, QueryParams } from './types/character'
import { Box, Modal, Container } from '@mui/material'
import Table from './components/DataTable'
import MediaCard from './components/MediaCard'
import PageController from './components/PageController'
import Search from './components/Search'
import Loader from './components/Loader'
import ViewCard from './components/ViewCard'
import ViewToggle, { View } from './components/ViewToggle'

const App = () => {
	const [charactersData, setCharactersData] = useState<CharactersResponse>()
	const [selectedCharacter, setSelectedCharacter] = useState<Character>()
	const [currentParams, setCurrentParams] = useState<QueryParams>({})
	const [view, setView] = useState<View>('table')

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
						<Box style={{ color: 'green' }}>
							View:
							<ViewToggle
								view={view}
								setView={(nextView: View) => setView(nextView)}
							/>
						</Box>
						{view === 'table' ? (
							<Table
								characters={charactersData.results}
								onSelectCharacter={selectCharacter}
							/>
						) : (
							<Container
								maxWidth='lg'
								style={{
									display: 'flex',
									flexWrap: 'wrap',
									justifyContent: 'center',
								}}>
								{charactersData.results.map((character) => (
									<ViewCard
										key={character.id}
										character={character}
										onSelect={(character) => selectCharacter(character)}
									/>
								))}
							</Container>
						)}
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
		</div>
	)
}

export default App
