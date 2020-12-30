/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import footerimg from '../../assets/footerTop.svg';
import Grid from '@material-ui/core/Grid';
import {
	Divider,
	ButtonGroup,
	Typography,
	Button,
	IconButton,
	Link,
} from '@material-ui/core';

import styles from './styles';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { MenuINavbar } from '..';

export default () => {
	const cls = styles();

	return (
		<div className={cls.root}>
			<Grid container direction="column" justify="center" alignItems="center">
				<Container maxWidth="sm" className={cls.footerimg}>
					<img src={footerimg} alt="footer" />
				</Container>
			</Grid>

			<Container maxWidth="lg" className={cls.navbar}>
				<Grid container justify="flex-end" alignItems="flex-end">
					<MenuINavbar />
				</Grid>
				<Divider style={{ marginBottom: 40 }} />
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="flex-start"
					spacing={3}
				>
					<Grid container direction="column" item xs={12} sm={4}>
						<Typography variant="h5" className={cls.headmenu}>
							Main Menu
						</Typography>
						<Link href="#" className={cls.item} underline="none">
							Pickup
						</Link>
						<Link href="#" className={cls.item} underline="none">
							Delivery
						</Link>
					</Grid>
					<Grid container direction="column" item xs={12} sm={4}>
						<Typography variant="h5" className={cls.headmenu}>
							Orders
						</Typography>
						<Link href="#" className={cls.item} underline="none">
							Upcoming Orders
						</Link>
						<Link href="#" className={cls.item} underline="none">
							Recent Orders
						</Link>
					</Grid>
					<Grid container direction="column" item xs={12} sm={4}>
						<Typography variant="h5" className={cls.headmenu}>
							Reservation
						</Typography>
						<Link href="#" className={cls.item} underline="none">
							Recent Reservation
						</Link>
						<Link href="#" className={cls.item} underline="none">
							Wait To Be Seated
						</Link>
					</Grid>
					<Grid container direction="column" item xs={12} sm={4}>
						<Typography variant="h5" className={cls.headmenu}>
							Profile
						</Typography>
						<Link href="#" className={cls.item} underline="none">
							Promos & credits
						</Link>
						<Link href="#" className={cls.item} underline="none">
							Rewards
						</Link>
					</Grid>
					<Grid container direction="column" item xs={12} sm={4}>
						<Typography variant="h5" className={cls.headmenu}>
							Support
						</Typography>
						<Link href="#" className={cls.item} underline="none">
							Recent Reservation
						</Link>
						<Link href="#" className={cls.item} underline="none">
							Wait To Be Seated
						</Link>
					</Grid>
					<Grid container direction="column" item xs={12} sm={4}>
						<Typography variant="h5" className={cls.headmenu}>
							Special Offers
						</Typography>
						<Link href="#" className={cls.item} underline="none">
							Happy Hour (Egg Burger with Truffle Mayo)
						</Link>
						<Link href="#" className={cls.item} underline="none">
							Happy Hour (Egg Burger with Truffle Mayo)
						</Link>
						<Link href="#" className={cls.item} underline="none">
							Happy Hour (Pad Thai)
						</Link>

						<Link href="#" className={cls.item} underline="none">
							Happy Hour (Egg Burger with Truffle Mayo)
						</Link>
					</Grid>
				</Grid>

				<Divider style={{ marginBottom: 40, marginTop: 50 }} />
				<Typography variant="h5">
					Delight customers everywhere with a branded custom-built native iOS,
					native Android and Installable Website Application.
				</Typography>
				<Typography variant="body2">
					Opeqe is reliable, fast and commission free all-in-one ordering
					solutions for multi-location or single location restaurants.
				</Typography>

				<Grid container direction="row" justify="center" alignItems="center">
					<ButtonGroup variant="text">
						<Button>©2019 OPEQE INC</Button>
						<Button>Terms & Conditions</Button>
						<Button>Privacy Policy</Button>
					</ButtonGroup>

					<Grid
						container
						justify="center"
						alignItems="center"
						style={{ marginLeft: 'auto' }}
					>
						<IconButton size="medium" className={cls.itemsocial}>
							<InstagramIcon />
						</IconButton>
						<IconButton size="medium" className={cls.itemsocial}>
							<TwitterIcon />
						</IconButton>
						<IconButton size="medium" className={cls.itemsocial}>
							<FacebookIcon />
						</IconButton>
						<IconButton size="medium" className={cls.itemsocial}>
							<YouTubeIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
