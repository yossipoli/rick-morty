import type { FC } from 'react'
import { Character } from '../types/character'
import Row from './Row'

type TableProps = {
	characters: Character[]
	onSelectCharacter: (character: Character) => void
}

const Table: FC<TableProps> = ({ characters, onSelectCharacter }) => {
	return (
		<table>
			<thead>
				<th>Image</th>
				<th>Character Name</th>
				<th>Origin</th>
				<th>Status</th>
				<th>Species</th>
				<th>Gender</th>
			</thead>
			<tbody>
				{characters.map((character) => (
					<Row
						key={character.id}
						character={character}
						onClick={onSelectCharacter}
					/>
				))}
			</tbody>
		</table>
	)
}

export default Table
