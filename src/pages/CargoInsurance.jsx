import ServicePage from './ServicePage';

const content = [
	'El Seguro de Carga es un componente esencial para proteger tu inversión durante todo el proceso logístico. En GO Logística Internacional ofrecemos pólizas a la medida que cubren riesgos desde el origen hasta el destino final, incluyendo transporte, almacenaje y manipulación.',
	'Trabajamos con las principales aseguradoras internacionales especializadas en carga y logística, lo que nos permite ofrecer coberturas amplias, primas competitivas y procesos de reclamación ágiles y transparentes.',
	'Nuestras pólizas cubren riesgos como daños por accidente, robo, pérdida total, mojadura, contaminación y retrasos. Además, gestionamos certificaciones y documentación requerida para mercancías de alto valor o productos sensibles.',
];

const CargoInsurance = () => (
	<ServicePage
		title="Seguro de Carga"
		description="Pólizas a la medida que protegen cada operación logística. Cobertura internacional, reclamación ágil y respaldo de las mejores aseguradoras del mercado."
		image="/images/cargo-insurance.jpg"
		benefits={[
			'Cobertura internacional desde origen hasta destino',
			'Reclamación ágil con respaldo de aseguradoras líderes',
			'Protección contra daños, robo, pérdida y retrasos',
			'Pólizas personalizadas según tipo de mercancía',
			'Asesoría en documentación y certificaciones',
			'Atención de siniestros en menos de 48 horas',
		]}
		content={content}
		keywords="seguro carga internacional, póliza mercancía transporte, seguro importación exportación, cobertura carga marítima aérea, aseguradora carga Colombia, protección mercancía, reclamación siniestro carga"
	/>
);

export default CargoInsurance;
