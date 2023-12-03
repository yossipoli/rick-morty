import { useState, useEffect } from 'react'
import { EpisodeCharacters } from '../types/api'
import { BarChart, XAxis, YAxis, Bar, Tooltip, CartesianGrid } from 'recharts'
import { getEpisodesCharacters } from '../DAL/Api'
import { Container } from '@mui/material'
import Loader from '../components/Loader'

const CharactersChart = () => {
	const [data, setData] = useState<EpisodeCharacters[]>([])

	useEffect(() => {
		;(async () => {
			setData((await getEpisodesCharacters()).reverse())
		})()
	}, [])

	return (
		<Container
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}>
			<h2 style={{ color: 'green' }}>Characters amount per episode:</h2>
			{!data.length ? (
				<Loader />
			) : (
				<BarChart
					width={1000}
					height={1000}
					data={data}
					margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
					layout='vertical'>
					<CartesianGrid stroke='#ccc' />
					<XAxis
						type='number'
						ticks={[10, 20, 30, 40, 50, 60, 70]}
					/>
					<YAxis
						dataKey='episode'
						type='category'
						reversed={true}
					/>
					<Tooltip />
					<Bar
						dataKey='charactersAmount'
						fill='green'
					/>
				</BarChart>
			)}
		</Container>
	)
}
export default CharactersChart
