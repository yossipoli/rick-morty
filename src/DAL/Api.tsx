import { Character } from '../types/character'

const api = 'https://rickandmortyapi.com/api/'

export type QueryParams = {
	page?: string
	name?: string
	status?: string
	gender?: string
}

export type CharactersResponse = {
	info: {
		count: string
		pages: string
		next?: string
		prev?: string
	}
	results: Character[]
}

export const getCharacters = async (
	queryParams: QueryParams
): Promise<CharactersResponse> => {
	const urlSearchParams = new URLSearchParams(queryParams).toString()

	const response = await fetch(`${api}/character?${urlSearchParams}`)
	const data = await response.json()
	if (data.error) {
		return {
			results: [],
			info: {
				count: '0',
				pages: '0',
			},
		}
	}
	return data
}

export const getAppearanceEpisodes = async (episodeLinks: string[]) => {
	const responseFirst = await fetch(episodeLinks[0])
	const firstAppearanceData = await responseFirst.json()
	const firstAppearance = firstAppearanceData.episode

	const responseLast = await fetch(episodeLinks[episodeLinks.length - 1])
	const lastAppearanceData = await responseLast.json()
	const lastAppearance = lastAppearanceData.episode

	return { firstAppearance, lastAppearance }
}
