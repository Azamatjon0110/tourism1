import logo from '/src/assets/logo.svg';
import { Link } from 'react-router-dom';
import language from '/src/assets/lang/language';
import './navbar.css';
const Navbar = () => {
	const lang = localStorage.getItem('lang');
	const ToggleNavbar = () => {
		document.querySelector('.hamburger').classList.toggle('active');
		document.querySelector('.navbar').classList.toggle('active');
	};
	const ToggleNavbarDs = () => {
		document.querySelector('.hamburger-ds').classList.toggle('active');
		document.querySelector('.desktop-offset').classList.toggle('active');
	};

	function changeLang() {
		console.log(EventTarget);
	}

	return (
		<nav className='navbar'>
			<div className='mobile-offset'>
				<Link to='/' className='logo'>
					<img className='logo-site' src={logo} alt='Logo' />
				</Link>

				<div className='navbar-box'>
					<div className='logo-box'>
						<Link to='/' className='logo'>
							<img className='logo-site' src={logo} alt='Logo' />
						</Link>
					</div>
					<div className='custom-menu'>
						<ul className='lang-list'>
							<li className='lang-item'>
								<p className='lang-btn' onClick={changeLang}>
									{language[lang].home.sel_lang.uz}
								</p>
							</li>
							<li className='lang-item'>
								<p className='lang-btn' onClick={changeLang}>
									{language[lang].home.sel_lang.ru}
								</p>
							</li>
							<li className='lang-item'>
								<p className='lang-btn' onClick={changeLang}>
									{language[lang].home.sel_lang.en}
								</p>
							</li>
						</ul>
					</div>

					<div className='site-menu'>
						<ul className='lang-list'>
							<li className='lang-item'>
								<Link className='lang-btn' to='/' data-scroll-to>
									{language[lang].home.navbar.home}
								</Link>
							</li>
							<li className='lang-item'>
								<Link className='lang-btn' to='/about' data-scroll-to>
									{language[lang].home.navbar.about}
								</Link>
							</li>
							<li className='lang-item'>
								<Link className='lang-btn' to='#contact' data-scroll-to>
									{language[lang].home.navbar.contact}
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='desktop-offset'>
				<Link to='/' className='logo'>
					<img className='logo-site' src={logo} alt='Logo' />
				</Link>
				<img
					className='ds-img'
					src='https://picsum.photos/id/237/200/300'
					alt=''
				/>
				<p className='ds-description'>
					It speedily me addition weddings vicinity in pleasure. Happiness
					commanded an conveying breakfast in. Regard her say warmly elinor. Him
					these are visit front end for seven walls. Money eat scale now ask law
					learn.
				</p>
				<h3 className='ds-time-title'>{language[lang].home.home_off.open}</h3>
				<div className='week-days'>
					<p className='week-item'>{language[lang].home.home_off.week_days}:</p>
					<p className='week-item'> 09:00 - 18:00</p>
				</div>
				<div className='week-days'>
					<p className='week-item'>
						{language[lang].home.home_off.weekDay_rest}:
					</p>
					<p className='week-item'>10:00 - 18:00</p>
				</div>
			</div>
			<div className='hamburger-menu mobile' onClick={ToggleNavbar}>
				<svg className='hamburger' width='30' height='30' viewBox='0 0 30 30'>
					<path className='line line-top' d='M0,9h30' />
					<path className='line line-center' d='M0,15h30' />
					<path className='line line-bottom' d='M0,21h30' />
				</svg>
			</div>
			<div className='hamburger-menu desktop' onClick={ToggleNavbarDs}>
				<svg
					className='hamburger-ds'
					width='30'
					height='30'
					viewBox='0 0 30 30'
				>
					<path className='line line-top' d='M0,9h30' />
					<path className='line line-center' d='M0,15h30' />
					<path className='line line-bottom' d='M0,21h30' />
				</svg>
			</div>
		</nav>
	);
};

export default Navbar;
