import { AppBar, MenuItem, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className='header-component'>
			<div className='title'>
				<div className='logo'>
					<img
						src='./../rick_and_morty_logo.png'
						alt='Rick and Morty Logo'
					/>
				</div>
			</div>
			<AppBar
				position='fixed'
				color='primary'>
				<Toolbar>
					<Typography variant='h6'>Rick and Morty character App</Typography>
					<MenuItem>
						<Link to='/'>Character Search</Link>
					</MenuItem>
					<MenuItem>
						<Link to='/chart'>Episodes Chart</Link>
					</MenuItem>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
