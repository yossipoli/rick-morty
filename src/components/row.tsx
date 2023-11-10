import type { FC } from 'react'
import Avatar from '@mui/material/Avatar'
import { Character } from '../types/character'

type RowProps = {
	character: Character
	onClick: (character: Character) => void
}

const Row: FC<RowProps> = ({ character, onClick }) => {
	const { name, image, origin, status, species, gender } = character
	return (
		<tr onClick={() => onClick(character)}>
			<td>
				<Avatar
					alt={name}
					src={image}
				/>
			</td>
			<td>{name}</td>
			<td>{origin.name}</td>
			<td>{status}</td>
			<td>{species}</td>
			<td>{gender}</td>
		</tr>
	)
}

export default Row
