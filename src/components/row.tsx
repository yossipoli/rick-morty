import type { FC } from 'react'
import Avatar from '@mui/material/Avatar'

export type rowProps = {
	id: number
	image: string
	name: string
	origin: { name: string; url: string }
	status: string
	species: string
	gender: string
}

const Row: FC<rowProps> = ({
	image,
	name,
	origin,
	status,
	species,
	gender,
}) => {
	return (
		<tr>
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
