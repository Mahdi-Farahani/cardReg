/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { ProductCard } from '..';
import data from '../../components/data/data.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<div>
			<Carousel
				responsive={responsive}
				arrows={true}
				transitionDuration={500}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				infinite={true}
			>
				{data.map((i, idx) => (
					<ProductCard
						key={idx}
						id={i.id}
						title={i.title}
						price={i.price}
						category={i.category}
						transport={i.transport}
						delivery={i.delivery}
						image={i.image}
					/>
				))}
			</Carousel>
		</div>
	);
};
