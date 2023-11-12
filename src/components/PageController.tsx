import { Pagination } from '@mui/material'
import { FC } from 'react'
import { QueryParams } from '../types/character'

type PaginationProps = {
	currentQueryParams: QueryParams
	count: number
	handleQueryParamsChange: (newPage: QueryParams) => void
}

const PageController: FC<PaginationProps> = ({
	currentQueryParams,
	count,
	handleQueryParamsChange,
}) => {
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		const newQueryParams = { ...currentQueryParams, page: value }
		handleQueryParamsChange(newQueryParams)
	}
	return (
		<div className='page-controller'>
			<Pagination
				count={count}
				page={currentQueryParams.page || 1}
				color='primary'
				className='paging'
				onChange={handleChange}
			/>
		</div>
	)
}

export default PageController
