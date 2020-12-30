import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
	root: {
		position: 'relative',
		width: '100%',
		height: "100%",
		backgroundColor: '#000',
		zIndex: 1,
	},
	footerimg: {
		position: 'absolute',
		width: '100%',
	},
	navbar: {
		right: 0,
		marginTop:35,
	},
	headmenu: {
		marginTop: 25,
	},
	itemsocial: {
		float: 'left',
		display: 'block',
		fontSize: '16px',
		borderBottom: '3px solid transparent',
		color: '#fff',

		'&:hover': {
			color: '#46e3db',
		},
	},
	item: {
		float: 'left',
		display: 'block',
		fontSize: '18px',
		borderBottom: '3px solid transparent',
		color: '#a5a5a5',

		'&:hover': {
			color: '#46e3db',
		},
	},
}));
