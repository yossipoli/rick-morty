import { FC, useEffect } from 'react'
import { QueryParams } from '../DAL/Api'
import { Button } from '@mui/base'
import { useDebounce } from 'use-debounce'

type SearchProps = {
	currentQueryParams: QueryParams
	handleSearch: (queryParams: QueryParams) => void
}

const Search: FC<SearchProps> = ({ currentQueryParams, handleSearch }) => {
	const [debouncedSearchValue, setDebouncedSearchValue] = useDebounce('', 1500)

	useEffect(() => {
		onChange('name', debouncedSearchValue)
	}, [debouncedSearchValue])

	const onChange = (name: keyof QueryParams, value: string) => {
		const newQueryParams: QueryParams = {
			...currentQueryParams,
			[name]: value,
			page: '1',
		}
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
					onChange={(e) => setDebouncedSearchValue(e.target.value)}
				/>
			</div>
			<div className='filters'>
				<select onChange={(e) => onChange('gender', e.target.value)}>
					<option value=''>Gender</option>
					<option value='female'>Female</option>
					<option value='male'>Male</option>
					<option value='genderless'>Genderless</option>
					<option value='unknown'>Unknown</option>
				</select>

				<select onChange={(e) => onChange('status', e.target.value)}>
					<option value=''>Status</option>
					<option value='alive'>Alive</option>
					<option value='dead'>Dead</option>
					<option value='unknown'>Unknown</option>
				</select>
			</div>

			<Button
				className='clear-button'
				onClick={handleClear}>
				Clear All
			</Button>
		</div>
	)
}

export default Search
