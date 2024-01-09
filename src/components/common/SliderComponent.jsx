import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Slider from '@mui/material/Slider';

const SliderComponent = ({
	label,
	defaultValue,
	min,
	max,
	step,
	unit,
	onChange,
	value,
	amount,
}) => {
	return (
		<>
			<Stack my={1.4}>
				<Stack gap={1}>
					<Typography variant="subtitle2">{label}</Typography>
					<Typography variant="h5">
						{unit} {amount}
					</Typography>
				</Stack>
				<Slider
					defaultValue={defaultValue}
					min={min}
					max={max}
					step={step}
					marks
					aria-label="Default"
					valueLabelDisplay="auto"
					onChange={onChange}
					value={value}
				/>
				<Stack gap={1} direction="row" justifyContent="space-between">
					<Typography variant="caption" color="text.secondary">
						{unit} {min}
					</Typography>
					<Typography variant="caption" color="text.secondary">
						{unit} {max}
					</Typography>
				</Stack>
			</Stack>
		</>
	);
};

export default SliderComponent;
