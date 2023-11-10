import { Pagination } from '@mui/material'
import { FC } from 'react'
import { QueryParams } from '../DAL/Api'

type PaginationProps = {
	currentQueryParams: QueryParams
	count: string
	handleQueryParamsChange: (newPage: QueryParams) => void
}

const Paging: FC<PaginationProps> = ({
	currentQueryParams,
	count,
	handleQueryParamsChange,
}) => {
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		const newQueryParams = { ...currentQueryParams, page: `${value}` }
		handleQueryParamsChange(newQueryParams)
	}
	return (
		<div className='paging'>
			<Pagination
				count={+count}
				page={+(currentQueryParams.page || '1')}
				color='primary'
				className='paging'
				onChange={handleChange}
			/>
		</div>
	)
}

export default Paging
