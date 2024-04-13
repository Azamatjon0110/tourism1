import Carusel from '../../components/carousel/carousel.jsx';
import language from '../../assets/lang/language.jsx';
import s from '../../assets/images/s.jpg';
import shape from '../../assets/images/title-shape.png';
import '../../assets/bootstrap/bootstrap.min.css';
import './home.css';
import { useEffect, useState } from 'react';

const Home = () => {
	const lang = localStorage.getItem('lang');
	const [arr, setArr] = useState([]);
	const newsText = () => {
		const news = document.querySelectorAll('.card-news');
		news.forEach((item) => {
			// if (item.textContent.length > 100) {
			// 	item.classList.add('dot');
			// 	item.textContent.slice(0, 100);
			// }
			console.log(item);
		});
	};
	function a() {
		setArr([1, 2, 3]);
		newsText();
	}
	useEffect(() => {
		a();
	}, [arr.length]);
	return (
		<>
			<Carusel />
			<div className='about'>
				<div className='container'>
					<img className='shape' src={shape} alt='' />
					<h3 className='about-title text-center'>
						{language[lang].home.about_title}
					</h3>
					<div className='row align-items-center'>
						<div
							className='col-lg-7  col-12'
							data-aos='fade-up'
							data-aos-duration='800'
						>
							<img src={s} className='about-img' alt='' />
						</div>
						<div
							className='col-lg-5 col-12'
							data-aos='fade-up'
							data-aos-duration='1600'
						>
							<div className='about-info'>
								<p className='about-text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Optio, fugiat eum atque repellendus sit vel excepturi expedita
									odio repellat modi soluta, perspiciatis natus provident
									aspernatur? Harum magnam molestias, inventore quo enim iste
									eveniet et eum eos cumque laborum ratione officia quibusdam
									voluptates? Mollitia animi sunt dicta odit. Error deleniti
									quasi consectetur labore, possimus quia placeat officiis,
									numquam adipisci corrupti sed rerum laborum quod molestias eos
									enim repellendus illum tenetur. Tenetur quae doloribus
									praesentium beatae perferendis iste facere totam dolores quis
									atque explicabo saepe ea, cum nemo nobis hic laborum vitae
									obcaecati voluptatem officiis recusandae mollitia esse
									incidunt similique. Accusamus, iusto.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='news'>
				<div className='container'>
					<img className='shape' src={shape} alt='' />
					<h3 className='about-title'>{language[lang].home.news_title}</h3>
					<div className='row'>
						{arr.map((item) => (
							<div className='col-12 col-md-6 col-lg-4 news-box' key={item}>
								<div className='card-news' data-aos='flip-up'>
									<img className='news-img' src={s} alt='' />
									<h3 className='news-title text-center'>Yangilliklar</h3>
									<p className='news-text text-center'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Illo error doloribus vitae ex quis eius cumque enim, sunt
										natus nostrum!
									</p>
									<button className='news-btn'>
										{language[lang].home.news_btn}
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
