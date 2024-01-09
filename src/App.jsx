import { useState } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

import Navbar from './components/Navbar';
import Result from './components/Result';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';

function App() {
	const [data, setData] = useState({
		homeValue: 3000,
		downPayment: 3000 * 0.2,
		loanAmount: 3000 * 0.8,
		loanTerm: 5,
		interestRate: 5,
	});
	return (
		<div className="app">
			<Navbar />
			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Grid container spacing={5} alignItems="center">
					<Grid item xs={12} md={6}>
						<SliderSelect data={data} setData={setData} />
						<TenureSelect data={data} setData={setData} />
					</Grid>
					<Grid item xs={12} md={6}>
						<Result data={data} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
