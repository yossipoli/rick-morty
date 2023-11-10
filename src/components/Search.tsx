import { FC } from 'react'
import { QueryParams } from '../DAL/Api'
import { Button } from '@mui/base'

type SearchProps = {
	currentQueryParams: QueryParams
	handleSearch: (queryParams: QueryParams) => void
}
//TODO add bounce for less fetches

const Search: FC<SearchProps> = ({ currentQueryParams, handleSearch }) => {
	const onChange = (name: string, value: string) => {
		const newQueryParams = { ...currentQueryParams, [name]: value, page: '1' }
		handleSearch(newQueryParams)
	}

	const handleClear = () => {
		handleSearch({})
	}

	return (
		<div className='searchContainer'>
			<div className='searchBox'>
				<input
					name='name'
					type='search'
					onChange={(e) => onChange(e.target.name, e.target.value)}
				/>
			</div>
			<div className='filters'>
				<select
					name='gender'
					id='gender'
					onChange={(e) => onChange(e.target.name, e.target.value)}>
					<option value=''>Gender</option>
					<option value='female'>Female</option>
					<option value='male'>Male</option>
					<option value='genderless'>Genderless</option>
					<option value='unknown'>Unknown</option>
				</select>

				<select
					name='status'
					id='status'
					onChange={(e) => onChange(e.target.name, e.target.value)}>
					<option value=''>Status</option>
					<option value='alive'>Alive</option>
					<option value='dead'>Dead</option>
					<option value='unknown'>Unknown</option>
				</select>

				<Button
					className='clear-button'
					onClick={handleClear}>
					Clear All
				</Button>
			</div>
		</div>
	)
}

export default Search
