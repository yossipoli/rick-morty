import { FC } from 'react'
import { QueryParams } from '../DAL/Api'

type SearchProps = {
	currentQueryParams: QueryParams
	handleSearch: (queryParams: QueryParams) => void
}

const Search: FC<SearchProps> = ({ currentQueryParams, handleSearch }) => {
	const onSearchChange = (newSearch: string) => {
		const newQueryParams = { ...currentQueryParams, name: newSearch, page: '1' }
		handleSearch(newQueryParams)
	}
	return (
		<div>
			<input
				type='search'
				onChange={(e) => onSearchChange(e.target.value)}
			/>
		</div>
	)
}

export default Search
