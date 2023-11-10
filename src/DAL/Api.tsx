const api = 'https://rickandmortyapi.com/api/'

export const getCharacters = async (
	page?: number,
	name?: string,
	status?: string
) => {
	const characters = await fetch(`${api}/character`).then((response) =>
		response.json()
	)
	return characters.results
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
