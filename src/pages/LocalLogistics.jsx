import ServicePage from './ServicePage';

const content = [
	'La Gestión Logística Local (OTM - One Team Management) es nuestro servicio integral de distribución y movilización de carga a nivel nacional. Coordinamos cada etapa del proceso logístico dentro del país, desde el ingreso de la mercancía hasta la entrega final al cliente.',
	'Nuestro equipo monitorea en tiempo real cada envío mediante tecnología GPS y plataformas de gestión de flota. Optimizamos rutas para reducir tiempos y costos, garantizando cumplimiento de normativas de tránsito y transporte de carga en Colombia.',
	'Brindamos soluciones para distribución urbana, transporte intermunicipal, última milla y cadena de frío. Cada operación cuenta con protocolos de seguridad, conductores certificados y vehículos especializados según el tipo de mercancía.',
];

const LocalLogistics = () => (
	<ServicePage
		title="Gestión Logística Local (OTM)"
		description="Coordinación integral de movilización nacional de carga con trazabilidad total, seguridad y cumplimiento regulatorio. Rutas optimizadas y monitoreo GPS en tiempo real."
		image="/images/local-logistics.jpg"
		benefits={[
			'Rutas optimizadas por IA para reducir tiempos y costos',
			'Cumplimiento regulatorio 100% en normativa de transporte',
			'Trazabilidad puerta a puerta con GPS en tiempo real',
			'Conductores certificados y capacitados',
			'Vehículos especializados por tipo de carga',
			'Reportes de entrega digitales y firmas electrónicas',
		]}
		content={content}
		keywords="gestión logística local Colombia, transporte nacional carga, OTM one team management, distribución mercancía nacional, logística terrestre Colombia, transporte intermunicipal, última milla, cadena de frío"
	/>
);

export default LocalLogistics;
