/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {
	CardMedia,
	CardContent,
	CardActions,
	CardActionArea,
	Card,
	Typography,
	Grid,
} from '@material-ui/core';
import styles from './styles';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';

export default (props) => {
	const cls = styles();

	return (
		<Card className={cls.root}>
			<CardActionArea>
				<CardMedia className={cls.media} image={props.image} />
				<Typography variant="h6" color="primary" className={cls.title}>
					{props.title}
				</Typography>
				<Typography variant="h6" color="primary" className={cls.title}>
					{props.category}
				</Typography>
				<Typography variant="h6" color="textSecondary" className={cls.title}>
					American,Main ,CourseLunch & Dinner
				</Typography>

				<CardContent>
					<Grid
						container
						spacing={4}
						direction="row"
						justify="flex-start"
						alignItems="flex-start"
					>
						<AccessAlarmsIcon />
						<Typography variant="h6">{`${props.delivery}`}</Typography>
						<Typography variant="body2" color="primary" className={cls.price}>{`${props.price}`}</Typography>
						<Typography
							variant="h6"
							className={cls.transport}
						>{`${props.transport}`}</Typography>
					</Grid>
				</CardContent>
			</CardActionArea>
			<CardActions></CardActions>
		</Card>
	);
};
