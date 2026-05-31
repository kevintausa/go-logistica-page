import ServicePage from './ServicePage';

const content = [
	'El Almacenaje Inteligente es la solución para empresas que buscan optimizar sus costos de inventario y mejorar la eficiencia de su cadena de suministro. En GO Logística Internacional operamos centros de distribución estratégicamente ubicados con tecnología WMS de última generación.',
	'Nuestros almacenes cuentan con sistemas de control de inventarios en tiempo real, zonas de picking y packing automatizadas, control de temperatura para productos sensibles, y seguridad 24/7 con cámaras de vigilancia y protocolos de acceso restringido.',
	'Ofrecemos servicios de cross-docking, kitting, etiquetado, reempaque y preparación de pedidos. Además, integramos nuestros sistemas con las plataformas de e-commerce de nuestros clientes para sincronización automática de stock y órdenes.',
];

const Warehousing = () => (
	<ServicePage
		title="Almacenaje Inteligente"
		description="Centros de distribución con sistemas WMS avanzados, control de inventarios en tiempo real, custodia segura y administración precisa de stock. Reduce costos y mejora rotación."
		image="/images/warehouse.jpg"
		benefits={[
			'Control de inventarios WMS en tiempo real',
			'Seguridad 24/7 con CCTV y acceso restringido',
			'Reporte de stock automatizado y alertas de nivel mínimo',
			'Zonas de temperatura controlada para productos sensibles',
			'Servicios de cross-docking, kitting y etiquetado',
			'Integración con plataformas de e-commerce',
		]}
		content={content}
		keywords="almacenaje inteligente Colombia, bodega logística, centro distribución, WMS sistema inventarios, custodia mercancía, cross docking, picking packing, almacenaje temperatura controlada"
	/>
);

export default Warehousing;
