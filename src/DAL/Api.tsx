const link = 'https://rickandmortyapi.com/api/character'

export const getCharacters = async (
	page?: number,
	name?: string,
	status?: string
) => {
	const characters = await fetch(`${link}`).then((response) => response.json())
	console.log(characters.results)
	return characters.results
}

//          ?page=1&name=rick&status=alive`
