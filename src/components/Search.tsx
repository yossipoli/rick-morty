import { FC, useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { QueryParams } from '../types/character'
import BasicSelect from './Select'
import { Button, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'

type SearchProps = {
	currentQueryParams: QueryParams
	handleSearch: (queryParams: QueryParams) => void
}

const Search: FC<SearchProps> = ({ currentQueryParams, handleSearch }) => {
	const { status, gender, name } = currentQueryParams
	const [searchValue, setSearchValue] = useState<string>(name ?? '')
	const [debouncedSearchValue, setDebouncedSearchValue] = useDebounce(
		name ?? '',
		300
	)

	useEffect(() => {
		setDebouncedSearchValue(searchValue)
	}, [searchValue])

	useEffect(() => {
		onChange('name', debouncedSearchValue)
	}, [debouncedSearchValue])

	const onChange = (
		key: keyof QueryParams,
		value: QueryParams['name' | 'gender' | 'status']
	) => {
		const newQueryParams: QueryParams = {
			...currentQueryParams,
			[key]: value,
			page: 1,
		}
		handleSearch(newQueryParams)
	}

	const handleClear = () => {
		setSearchValue('')
		handleSearch({})
	}

	return (
		<div className='search-container'>
			<div className='search-box'>
				<TextField
					label='Search'
					variant='outlined'
					name='name'
					type='search'
					placeholder='Search'
					value={searchValue}
					color='success'
					style={{ color: 'green' }}
					onChange={(e) => setSearchValue(e.target.value)}
					InputProps={{
						endAdornment: <SearchIcon style={{ color: 'green' }} />,
					}}
				/>
			</div>
			<div className='filters'>
				<BasicSelect
					id='gender'
					label='Gender'
					value={gender ?? ''}
					options={[
						{ value: 'female', label: 'Female' },
						{ value: 'male', label: 'Male' },
						{ value: 'genderless', label: 'Genderless' },
						{ value: 'unknown', label: 'Unknown' },
					]}
					onChange={onChange}
				/>

				<BasicSelect
					id='status'
					label='Status'
					value={status ?? ''}
					options={[
						{ value: 'alive', label: 'Alive' },
						{ value: 'dead', label: 'Dead' },
						{ value: 'unknown', label: 'Unknown' },
					]}
					onChange={onChange}
				/>

				<Button
					className='clear-button'
					variant='outlined'
					color='success'
					startIcon={<DeleteIcon />}
					onClick={handleClear}>
					Clear All
				</Button>
			</div>
		</div>
	)
}

export default Search
