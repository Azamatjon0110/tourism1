import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Navbar from '../navbar/navbar';
import './carusel.css';
import { useState } from 'react';
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
const Carusel = () => {
	const [crs] = useState([1, 2, 3]);
	return (
		<>
			<div className='header-top'>
				<Navbar />
				<Carousel
					responsive={responsive}
					autoPlay={1000}
					showDots={true}
					infinite={true}
				>
					{crs.map((item) => (
						<div className='crs-item' key={item}></div>
					))}
				</Carousel>
			</div>
		</>
	);
};

export default Carusel;
