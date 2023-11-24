export type Episode = {
	id: number
	episode: string
	characters: string[]
}

export type ApiResponse = {
	results: Episode[]
	info: {
		next: string | null
	}
}

export type Result = {
	id: number
	episode: string
	charactersAmount: number
}
