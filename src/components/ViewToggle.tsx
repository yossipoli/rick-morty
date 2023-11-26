import { FC, MouseEvent } from 'react'
import ViewListIcon from '@mui/icons-material/ViewList'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export type View = 'table' | 'cards'

type ViewToggleProps = {
	view: View
	setView: (view: View) => void
}

const ViewToggle: FC<ViewToggleProps> = ({ view, setView }) => {
	const handleChange = (event: MouseEvent<HTMLElement>, nextView: View) => {
		setView(nextView)
	}

	return (
		<ToggleButtonGroup
			value={view}
			exclusive
			onChange={handleChange}
			style={{ margin: '10px' }}>
			<ToggleButton
				value='table'
				title='table'
				aria-label='table'>
				<ViewListIcon />
			</ToggleButton>

			<ToggleButton
				value='cards'
				title='cards'
				aria-label='cards'>
				<ViewModuleIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	)
}

export default ViewToggle
