import type { FC } from 'react'
import Row, { rowProps } from './row'

type tableProps = {
	rows: rowProps[]
}

const Table: FC<tableProps> = ({ rows }) => {
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
				{rows.map((row) => (
					<Row
						key={row.id}
						{...row}
					/>
				))}
			</tbody>
		</table>
	)
}

export default Table
