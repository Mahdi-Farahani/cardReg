import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
	root: {
		backgroundColor: '#fed201',
	},
	SignUpbutton: {
		borderRadius: 30,
		color: '#fed201',
		marginLeft: 10,
	},
	LogInbutton: {
		borderRadius: 30,
		color: '#000',
		marginLeft: 10,
	},
	item: {
		color: '#000',
		'&:hover': {
			color: '#fff',
			backgroundColor: '#000',
			borderRadius: 25,
		},
	},
	logo: {
		width: 170,
		height: 50,
		verticalAlign: 'middle',
	},
	itemContainer: {
		marginLeft: 'auto',
	},
}));
