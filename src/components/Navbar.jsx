import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Container maxWidth="xl">
					<Typography variant="h5" component="h1">
						Bank of React
					</Typography>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
