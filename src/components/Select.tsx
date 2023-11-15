import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { FC } from 'react'
import { QueryParams } from '../types/character'

type BasicSelectProps = {
	id: keyof QueryParams
	label: string
	value: string
	options: { label: string; value: string }[]
	onChange: (key: keyof QueryParams, value: string) => void
}

const BasicSelect: FC<BasicSelectProps> = ({
	id,
	label,
	value,
	options,
	onChange,
}) => {
	const handleChange = (event: SelectChangeEvent) => {
		onChange(id, event.target.value as string)
	}

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel
					id={id}
					style={{ color: 'green' }}>
					{label}
				</InputLabel>
				<Select
					labelId={id}
					label={label}
					value={value}
					style={{ color: 'green' }}
					color='success'
					onChange={handleChange}>
					{options.map((option) => (
						<MenuItem
							key={option.label}
							value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	)
}

export default BasicSelect
