import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import about from '../pages/about/about';

function MainRoutes() {
	return (
		<Routes>
			<Route path='/' Component={Home} />
			<Route path='/about' Component={about} />
		</Routes>
	);
}

export default MainRoutes;
