import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AirTransport from './pages/AirTransport';
import MaritimeTransport from './pages/MaritimeTransport';
import LocalLogistics from './pages/LocalLogistics';
import Warehousing from './pages/Warehousing';
import CargoInsurance from './pages/CargoInsurance';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/servicios/transporte-aereo" element={<AirTransport />} />
				<Route path="/servicios/transporte-maritimo" element={<MaritimeTransport />} />
				<Route path="/servicios/gestion-logistica-local" element={<LocalLogistics />} />
				<Route path="/servicios/almacenaje-inteligente" element={<Warehousing />} />
				<Route path="/servicios/seguro-de-carga" element={<CargoInsurance />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
