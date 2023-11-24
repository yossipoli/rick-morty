import type { FC } from 'react'
import Avatar from '@mui/material/Avatar'
import { Character } from '../types/character'
import { TableCell, TableRow } from '@mui/material'

type RowProps = {
	character: Character
	onClick: (character: Character) => void
}

const Row: FC<RowProps> = ({ character, onClick }) => {
	const { name, image, origin, status, species, gender } = character
	return (
		<TableRow
			onClick={() => onClick(character)}
			style={{ cursor: 'pointer' }}>
			<TableCell>
				<Avatar
					alt={name}
					src={image}
				/>
			</TableCell>
			<TableCell>{name}</TableCell>
			<TableCell>{origin.name}</TableCell>
			<TableCell>{status}</TableCell>
			<TableCell>{species}</TableCell>
			<TableCell>{gender}</TableCell>
		</TableRow>
	)
}

export default Row
