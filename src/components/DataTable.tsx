import type { FC } from 'react'
import { Character } from '../types/character'
import Row from './DataRow'
import {
	Table as TableComp,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'

type TableProps = {
	characters: Character[]
	onSelectCharacter: (character: Character) => void
}

const Table: FC<TableProps> = ({ characters, onSelectCharacter }) => {
	return (
		<TableContainer>
			<TableComp
				stickyHeader
				aria-label='sticky table'>
				<TableHead className='table-head'>
					<TableRow>
						<TableCell style={{ color: 'white', backgroundColor: 'green' }}>
							<strong>Image</strong>
						</TableCell>
						<TableCell style={{ color: 'white', backgroundColor: 'green' }}>
							<strong>Character Name</strong>
						</TableCell>
						<TableCell style={{ color: 'white', backgroundColor: 'green' }}>
							<strong>Origin</strong>
						</TableCell>
						<TableCell style={{ color: 'white', backgroundColor: 'green' }}>
							<strong>Status</strong>
						</TableCell>
						<TableCell style={{ color: 'white', backgroundColor: 'green' }}>
							<strong>Species</strong>
						</TableCell>
						<TableCell style={{ color: 'white', backgroundColor: 'green' }}>
							<strong>Gender</strong>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{characters.map((character) => (
						<Row
							key={character.id}
							character={character}
							onClick={onSelectCharacter}
						/>
					))}
				</TableBody>
			</TableComp>
		</TableContainer>
	)
}

export default Table
