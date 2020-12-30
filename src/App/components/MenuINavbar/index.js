/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from '@material-ui/core';
import styles from './styles';

export default () => {
	const cls = styles();

	return (
		<div className={cls.topnav}>
			<Link href="#" className={cls.item} underline="none">
				About
			</Link>
			<Link href="#" className={cls.item} underline="none">
				Services
			</Link>
			<Link href="#" className={cls.item} underline="none">
				Support
			</Link>
			<Link href="#" className={cls.item} underline="none">
				Gallery
			</Link>
			<Link href="#" className={cls.item} underline="none">
				Terms
			</Link>
			<Link href="#" className={cls.item} underline="none">
				Locations
			</Link>
		</div>
	);
};
