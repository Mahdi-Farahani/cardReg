/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Headerimg from '../../assets/Headerimg.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default () => {
	const cls = styles();
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div>
			<Grid
				container
				spacing={1}
				direction="row"
				
			>
				<img src={Headerimg} alt="header" className={cls.image} />
				<Carousel
					responsive={responsive}
					arrows={false}
					showDots={true}
					infinite={true}
				>
					<div>
						<Typography variant="h3" color="initial">
							Happy Hour Get $5 Off When You Order California Chicken Salad
						</Typography>
					</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
				</Carousel>
			</Grid>
		</div>
	);
};
