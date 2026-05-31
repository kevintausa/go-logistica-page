import ServicePage from './ServicePage';

const content = [
	'El transporte aéreo de carga es la solución ideal cuando el tiempo es el factor más crítico. En GO Logística Internacional gestionamos embarques aéreos desde y hacia cualquier aeropuerto del mundo, asegurando que tu mercancía llegue en el menor tiempo posible.',
	'Nuestro equipo coordina cada etapa del proceso: recolección en origen, consolidación de carga, emisión de guías aéreas (AWB), gestión aduanera en origen y destino, y entrega final puerta a puerta. Trabajamos con las principales aerolíneas de carga internacional para ofrecerte tarifas competitivas y espacio garantizado.',
	'Ofrecemos servicios de carga general, carga perecedera que requiere refrigeración, mercancías de alto valor con seguros especializados, y carga peligrosa certificada según normativas IATA. Cada envío cuenta con seguimiento GPS en tiempo real y notificaciones automáticas en cada hito.',
];

const AirTransport = () => (
	<ServicePage
		title="Servicio de Transporte Aéreo"
		description="Transporte aéreo de carga internacional con tiempos de entrega optimizados. Coordinamos embarques desde y hacia cualquier aeropuerto del mundo con seguimiento en tiempo real."
		image="/images/air-transport.jpg"
		benefits={[
			'Tiempos de entrega express de 24 a 72 horas',
			'Seguimiento GPS en tiempo real durante el vuelo',
			'Documentación aduanera y AWB gestionada por nuestro equipo',
			'Cobertura en más de 180 aeropuertos internacionales',
			'Seguros de carga incluidos en todas las operaciones',
			'Atención personalizada 24/7 para emergencias',
		]}
		content={content}
		keywords="transporte aéreo carga internacional, flete aéreo Colombia, envío aéreo mercancía, carga express internacional, logística aérea, AWB, aerolíneas carga, transporte aéreo puerta a puerta"
	/>
);

export default AirTransport;
