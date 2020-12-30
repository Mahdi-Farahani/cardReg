/* eslint-disable import/no-anonymous-default-export */
import routes from './routes';
import { HashRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { Footer, Navbar } from '../App/components';
import theme from '../theme';

export default () => {
	return (
		<MuiThemeProvider theme={theme.default}>
			<Navbar />
			<Router>
				{routes.map((i) => (
					<Route key={i.path} path={i.path} component={i.component} exact />
				))}
			</Router>
			<Footer />
		</MuiThemeProvider>
	);
};
