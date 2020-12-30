/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Container, Typography, Divider } from '@material-ui/core';
import { Header, Foods } from '../../components';
import styles from './styles';

export default () => {
	const cls = styles();

	return (
		<div>
			<Header />
			<Container maxWidth="xl" className={cls.container}>
				<Typography variant="h4" color="primary">
					Lunch & Dinner
				</Typography>
				<Divider className={cls.divider} />
				<Foods />
				<Typography variant="h4" color="primary">
					Mexican
				</Typography>
				<Divider className={cls.divider} />
				<Foods />
				<Typography variant="h4" color="primary">
					Japanese
				</Typography>
				<Divider className={cls.divider} />
				<Foods />
				<Typography variant="h4" color="primary">
					Pizza
				</Typography>
				<Divider className={cls.divider} />
				<Foods />
				<Typography variant="h4" color="primary">
					Sandwich
				</Typography>
				<Divider className={cls.divider} />
				<Foods />
			</Container>
		</div>
	);
};
