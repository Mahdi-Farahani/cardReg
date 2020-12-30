import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
	topnav: {
		overflow: 'hidden',
	},

	item: {
		float: 'left',
		display: 'block',
		textAlign: 'center',
		textDecoration: 'none',
		fontSize: '20px',
		borderBottom: '3px solid transparent',
		color: '#a5a5a5',
		padding: '20px 10px',
		'&:hover': {
			color: '#46e3db',
			borderBottom: '3px solid #46e3db',
		},
	},
}));
