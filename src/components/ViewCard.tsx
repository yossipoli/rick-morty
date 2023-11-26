import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import { Character } from '../types/character'
import { FC } from 'react'

type ViewCardProps = {
	character: Character
	onSelect: (character: Character) => void
}

const ViewCard: FC<ViewCardProps> = ({ character, onSelect }) => {
	return (
		<Card
			sx={{ maxWidth: 200 }}
			style={{ margin: '10px' }}>
			<CardActionArea onClick={() => onSelect(character)}>
				<CardMedia
					component='img'
					image={character.image}
					alt={character.name}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'>
						{character.name}
					</Typography>
					<Typography>Status: {character.status}</Typography>
					<Typography>Species: {character.species}</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default ViewCard
