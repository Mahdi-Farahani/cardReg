/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import styles from './styles';
import { Button, IconButton, Toolbar, Hidden, Grid } from '@material-ui/core';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import opeqeLogo from '../../assets/opeqe-logo.svg';
export default () => {
	const cls = styles();
	return (
		<Toolbar component="div" className={cls.root}>
			<Grid
				container
				spacing={1}
				direction="row"
				justify="flex-start"
				alignItems="flex-start"
				alignContent="stretch"
				wrap="nowrap"
			>
				<Grid item xs={6} >
					<img src={opeqeLogo} alt="opeqeLogo" className={cls.logo} />
				</Grid>
				<Grid item xs={6}  className={cls.itemContainer}>
					<Hidden mdDown>
						<Button size="large" className={cls.item}>
							Reservation
						</Button>
						<Button size="large" className={cls.item}>
							Orders
						</Button>
						<Button size="large" className={cls.item}>
							Locations
						</Button>
					</Hidden>

					<Button
						size="medium"
						variant="outlined"
						color="default"
						className={cls.LogInbutton}
					>
						Log In
					</Button>
					<Hidden smDown>
						<Button
							variant="contained"
							size="medium"
							color="primary"
							className={cls.SignUpbutton}
						>
							Sign Up
						</Button>
					</Hidden>

					<IconButton color="inherit">
						<ShoppingBasketIcon fontSize="large" />
					</IconButton>
				</Grid>
			</Grid>
		</Toolbar>
	);
};
