import ServicePage from './ServicePage';

const content = [
	'El transporte marítimo es el método más eficiente y económico para mover grandes volúmenes de carga entre continentes. En GO Logística Internacional gestionamos embarques marítimos en contenedores completos (FCL) y consolidados (LCL), adaptándonos a las necesidades de cada cliente.',
	'Coordinamos rutas desde los principales puertos de Asia, Europa, Estados Unidos y Latinoamérica hacia Colombia. Nuestro equipo se encarga de la reserva de espacio en buques, emisión de BL (Bill of Lading), gestión portuaria, trámites de importación/exportación y transporte terrestre de conexión.',
	'Contamos con alianzas estratégicas con navieras líderes mundiales, lo que nos permite ofrecer tarifas competitivas, espacio confirmado y múltiples opciones de rutas y tiempos de tránsito. Además, gestionamos seguros marítimos, inspecciones y certificaciones requeridas por normativa.',
];

const MaritimeTransport = () => (
	<ServicePage
		title="Servicio de Transporte Marítimo"
		description="Transporte marítimo de carga en contenedores FCL y LCL a nivel mundial. Tarifas competitivas, seguimiento de flota y coordinación portuaria para importaciones y exportaciones seguras."
		image="/images/maritime-transport.jpg"
		benefits={[
			'Contenedores FCL (completos) y LCL (consolidados)',
			'Tarifas competitivas por volumen y frecuencia',
			'Seguimiento de flota global en tiempo real',
			'Cobertura en más de 300 puertos internacionales',
			'Gestión de BL, seguros y documentación portuaria',
			'Asesoría en clasificación arancelaria y normativas',
		]}
		content={content}
		keywords="transporte marítimo carga internacional, contenedores FCL LCL, flete marítimo Colombia, envío marítimo mercancía, importación exportación marítima, buques carga, puertos internacionales, Bill of Lading"
	/>
);

export default MaritimeTransport;
