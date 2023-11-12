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
				<TableHead>
					<TableRow>
						<TableCell>
							<strong>Image</strong>
						</TableCell>
						<TableCell>
							<strong>Character Name</strong>
						</TableCell>
						<TableCell>
							<strong>Origin</strong>
						</TableCell>
						<TableCell>
							<strong>Status</strong>
						</TableCell>
						<TableCell>
							<strong>Species</strong>
						</TableCell>
						<TableCell>
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
