import { ApiResponse, Episode, EpisodeCharacters } from '../types/api'
import { CharactersResponse, QueryParams } from '../types/character'

const api = 'https://rickandmortyapi.com/api'

export const getCharacters = async (
	queryParams: QueryParams
): Promise<CharactersResponse> => {
	const urlSearchParams = new URLSearchParams(
		queryParams as Record<string, any>
	).toString()

	const response = await fetch(`${api}/character?${urlSearchParams}`)
	const data = await response.json()
	if (data.error) {
		return {
			results: [],
			info: {
				count: 0,
				pages: 0,
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

export const getEpisodesCharacters = async (
	url: string = `${api}/episode`
): Promise<EpisodeCharacters[]> => {
	const episodeData: EpisodeCharacters[] = []
	const response = await fetch(url)
	const data: ApiResponse = await response.json()

	for (const episode of data.results) {
		episodeData.push({
			id: episode.id,
			episode: episode.episode,
			charactersAmount: episode.characters.length,
		})
	}

	if (data.info.next) {
		const nextPageData = await getEpisodesCharacters(data.info.next)
		episodeData.push(...nextPageData)
	}

	return episodeData
}
