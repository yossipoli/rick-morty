const api = 'https://rickandmortyapi.com/api/'

export const getCharacters = async (
	page?: number,
	name?: string,
	status?: string
) => {
	const characters = await fetch(`${api}/character?page=${page}`).then(
		(response) => response.json()
	)
	console.log(characters.info.pages)

	return {
		characterList: characters.results,
		pages: characters.info.pages,
	}
}

//          ?page=1&name=rick&status=alive`

export const getAppearanceEpisodes = async (episodeLinks: string[]) => {
	const firstAppearanceData = await fetch(episodeLinks[0]).then((response) =>
		response.json()
	)
	const firstAppearance = firstAppearanceData.episode

	const lastAppearanceData = await fetch(
		episodeLinks[episodeLinks.length - 1]
	).then((response) => response.json())
	const lastAppearance = lastAppearanceData.episode

	return { firstAppearance, lastAppearance }
}
