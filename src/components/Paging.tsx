import { Pagination } from '@mui/material'
import { FC } from 'react'

type PaginationProps = {
	page: number
	count: number
	handlePageChange: (newPage: number) => void
}

const Paging: FC<PaginationProps> = ({ page = 1, count, handlePageChange }) => {
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		handlePageChange(value)
	}
	return (
		<div>
			<Pagination
				count={count}
				page={page}
				color='primary'
				className='paging'
				onChange={handleChange}
			/>
		</div>
	)
}

export default Paging
