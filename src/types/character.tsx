export type Status = 'alive' | 'dead' | 'unknown'
export type Gender = 'female' | 'male' | 'genderless' | 'unknown'

export type Character = {
	id: number
	image: string
	name: string
	origin: { name: string; url: string }
	status: Status
	species: string
	gender: Gender
	episode: string[]
}

export type CharactersResponse = {
	info: {
		count: number
		pages: number
	}
	results: Character[]
}

export type QueryParams = {
	page?: number
	name?: string
	status?: Status
	gender?: Gender
}
