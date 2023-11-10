import type { FC } from 'react'
import { Character } from '../types/character'
import Row from './DataRow'

type TableProps = {
	characters: Character[]
	onSelectCharacter: (character: Character) => void
}

const Table: FC<TableProps> = ({ characters, onSelectCharacter }) => {
	return (
		<div className='table-container'>
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
		</div>
	)
}

export default Table
