/* eslint-disable import/no-anonymous-default-export */
import defaultTheme from './default';
import { createMuiTheme } from '@material-ui/core';

const overrides = {
	typography: {
		body2: {
      fontSize: '18px',
      color:"#a5a5a5"
		},
		body1: {

    },
		h1: {
			fontSize: '3rem',
		},
		h2: {
			fontSize: '2rem',
		},
		h3: {
			fontSize: '1.64rem',
		},
		h4: {
			fontSize: '1.5rem',
		},
		h5: {
			fontSize: '1.285rem',
			color: '#fff',
		},
		h6: {
			fontSize: '1.142rem',
		},
	},
};

export default {
	default: createMuiTheme({ ...defaultTheme, ...overrides }),
};
