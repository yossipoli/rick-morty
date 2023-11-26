import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import * as API from '../DAL/Api'
import { Character } from '../types/character'

type MediaCardProps = {
	character: Character
}
const MediaCard: FC<MediaCardProps> = ({ character }) => {
	const [episodes, setEpisodes] = useState({
		first: '',
		last: '',
	})
	useEffect(() => {
		;(async () => {
			const { firstAppearance, lastAppearance } =
				await API.getAppearanceEpisodes(character.episode)
			setEpisodes({
				first: firstAppearance,
				last: lastAppearance,
			})
		})()
	}, [])
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
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
					<Typography>First Appearance: {episodes.first}</Typography>
					<Typography>Last Appearance: {episodes.last}</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default MediaCard
