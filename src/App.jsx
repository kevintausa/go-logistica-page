import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const stats = [
		{ label: 'Años de experiencia', value: '+10' },
		{ label: 'Operaciones exitosas', value: '350+' },
		{ label: 'Países atendidos', value: '18' },
		{ label: 'Clientes fidelizados', value: '+120' },
	];

	const services = [
		{
			title: 'Servicio de transporte aéreo',
			description:
				'Ofrecemos transporte aéreo de carga internacional con tiempos de entrega optimizados. Coordinamos embarques desde y hacia cualquier aeropuerto del mundo, gestionando documentación, seguimiento en tiempo real y despacho aduanero.',
			image: '/images/air-transport.jpg',
			benefits: [
				'Tiempos de entrega express',
				'Seguimiento GPS en vuelo',
				'Documentación aduanera incluida',
			],
		},
		{
			title: 'Servicio de transporte marítimo',
			description:
				'Gestionamos el transporte marítimo de carga en contenedores FCL y LCL a nivel mundial. Brindamos tarifas competitivas, seguimiento de flota y coordinación portuaria para importaciones y exportaciones seguras.',
			image: '/images/maritime-transport.jpg',
			benefits: [
				'Contenedores FCL y LCL',
				'Tarifas competitivas por volumen',
				'Seguimiento de flota global',
			],
		},
		{
			title: 'Gestión logística local (OTM)',
			description:
				'Coordinamos la movilización nacional de la carga con trazabilidad total, seguridad en cada punto y cumplimiento estricto de la normativa regulatoria. Nuestro equipo monitorea cada envío para garantizar entregas puntuales y eficientes.',
			image: '/images/local-logistics.jpg',
			benefits: [
				'Rutas optimizadas por IA',
				'Cumplimiento regulatorio 100%',
				'Trazabilidad puerta a puerta',
			],
		},
		{
			title: 'Almacenaje inteligente',
			description:
				'Centros de distribución aliados con sistemas WMS avanzados, control de inventarios en tiempo real, custodia segura y administración precisa de stock. Reduce costos de almacenamiento y mejora la rotación de tu mercancía.',
			image: '/images/warehouse.jpg',
			benefits: [
				'Control de inventarios WMS',
				'Seguridad 24/7 con CCTV',
				'Reporte de stock en tiempo real',
			],
		},
		{
			title: 'Seguro de carga',
			description:
				'Protegemos cada operación con pólizas a la medida que minimizan riesgos durante todo el trayecto. Cobertura internacional, reclamación ágil y respaldo de las mejores aseguradoras del mercado logístico.',
			image: '/images/cargo-insurance.jpg',
			benefits: [
				'Cobertura internacional',
				'Reclamación ágil y sencilla',
				'Respaldado por aseguradoras líderes',
			],
		},
		{
			title: 'Transporte terrestre',
			description:
				'Flota confiable y monitoreada para entregas puntuales a nivel local y nacional. Contamos con vehículos especializados, conductores certificados y tecnología GPS para que siempre sepas dónde está tu carga.',
			image: '/images/truck-fleet.jpg',
			benefits: [
				'GPS satelital en tiempo real',
				'Conductores certificados',
				'Vehículos especializados por carga',
			],
		},
	];

	const process = [
		{
			step: '01',
			title: 'Diagnóstico y planificación',
			copy: 'Analizamos la ruta, normativa y presupuesto para diseñar la estrategia logística ideal.',
		},
		{
			step: '02',
			title: 'Coordinación integral',
			copy: 'Gestionamos transporte internacional y nacional, documentación y comunicación con todos los actores.',
		},
		{
			step: '03',
			title: 'Ejecución y trazabilidad',
			copy: 'Monitoreamos la carga en tiempo real, optimizando tiempos y controlando costos.',
		},
		{
			step: '04',
			title: 'Cierre y mejora continua',
			copy: 'Entregamos reportes, aseguramos cumplimiento y proponemos mejoras para la siguiente operación.',
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		alert('Gracias por tu interés. Te contactaremos pronto.');
		setFormData({ name: '', email: '', message: '' });
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<Navbar />
			<main className="page">
				{/* HERO */}
				<section className="hero">
					<div className="hero__bg">
						<img src="/images/hero-ship.jpg" alt="Logística internacional" />
						<div className="hero__overlay"></div>
					</div>
					<div className="hero__content">
						<p className="tag">Soluciones integrales de comercio exterior</p>
						<h1>
							Logística confiable,
							<br />
							alcance global.
						</h1>
						<p className="hero__copy">
							En GO LOGÍSTICA INTERNACIONAL lideramos operaciones de importación y exportación
							con total trazabilidad, eficiencia y seguridad. Nos encargamos de cada fase para
							que tu carga llegue a destino sin sorpresas.
						</p>
						<div className="hero__actions">
							<a className="btn primary" href="#contacto">
								Solicitar acompañamiento
							</a>
							<a className="btn ghost" href="#servicios">
								Conoce nuestros servicios
							</a>
						</div>
					</div>
				</section>

				{/* STATS */}
				<section className="stats">
					{stats.map(({ label, value }, index) => (
						<article className="stat" data-animate key={index}>
							<p className="stat__value">{value}</p>
							<p className="stat__label">{label}</p>
						</article>
					))}
				</section>

				{/* SERVICIOS PROFUNDIZADOS */}
				<section className="services" id="servicios">
					<div className="section-heading">
						<p className="tag">Nuestros servicios</p>
						<h2>Operaciones diseñadas para cada cadena logística</h2>
						<p className="section-subtitle">
							Desde el origen hasta el destino final, cubrimos cada eslabón de tu cadena de suministro
							con tecnología, experiencia y compromiso.
						</p>
					</div>
					<div className="services__list">
						{services.map(({ title, description, image, benefits }, index) => (
							<article className="service-card" data-animate key={index}>
								<div className="service-card__image">
									<img src={image} alt={title} loading="lazy" />
								</div>
								<div className="service-card__body">
									<h3>{title}</h3>
									<p>{description}</p>
									<ul className="service-card__benefits">
										{benefits.map((benefit, i) => (
											<li key={i}>
												<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
													<polyline points="20 6 9 17 4 12"></polyline>
												</svg>
												<span>{benefit}</span>
											</li>
										))}
									</ul>
									<button className="btn primary btn--small">Solicitar este servicio</button>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* PROCESO */}
				<section className="process" id="proceso">
					<div className="section-heading">
						<p className="tag">Cómo trabajamos</p>
						<h2>Metodología clara de principio a fin</h2>
					</div>
					<div className="process__steps">
						{process.map(({ step, title, copy }, index) => (
							<article className="process__card" data-animate key={index}>
								<span className="process__step">{step}</span>
								<h3>{title}</h3>
								<p>{copy}</p>
							</article>
						))}
					</div>
				</section>

				{/* QUIÉNES SOMOS */}
				<section className="about" id="quienes-somos">
					<div className="about__text">
						<p className="tag">¿Quiénes somos?</p>
						<h2>Expertos en logística segura y transparente</h2>
						<p>
							Somos aliados estratégicos para mover tu carga con soluciones integrales,
							respaldo operativo y precios justos. Nuestro equipo acompaña cada hito para
							garantizar cumplimiento y trazabilidad real.
						</p>
						<p>
							Con más de 10 años liderando importaciones y exportaciones, integramos transporte
							internacional/nacional, cadena de suministro y control documental conforme a
							normativa vigente.
						</p>
					</div>
					<div className="about__card" data-animate>
						<h3>¿Qué hacemos?</h3>
						<p>
							Desarrollamos operaciones puerta a puerta con supervisión desde el origen hasta el
							destino final, asegurando ahorro, eficiencia y seguridad en cada etapa.
						</p>
						<ul>
							<li>Trazabilidad en tiempo real</li>
							<li>Optimización de tiempos y costos</li>
							<li>Control documental riguroso</li>
							<li>Equipo operativo disponible 24/7</li>
						</ul>
					</div>
				</section>

				{/* CONTACTO */}
				<section className="cta" id="contacto">
					<div>
						<p className="tag">Hablemos hoy</p>
						<h2>Agenda una consultoría logística</h2>
						<p>
							Cuéntanos tu reto de transporte o comercio exterior y diseñaremos un plan a medida
							con los mejores aliados en cada país.
						</p>
						<div className="contact__info">
							<a
								href="https://wa.me/573117038818"
								target="_blank"
								rel="noopener noreferrer"
								className="contact__item"
							>
								<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.125.298-.325.446-.488.149-.162.198-.297.298-.496.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
								</svg>
								<span>+57 311 703 8818</span>
							</a>
							<a href="mailto:comercial@gologistica.com.co" className="contact__item">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
									<polyline points="22,6 12,13 2,6" />
								</svg>
								<span>comercial@gologistica.com.co</span>
							</a>
						</div>
					</div>
					<form className="cta__form" onSubmit={handleSubmit}>
						<label>
							Nombre y empresa
							<input
								type="text"
								name="name"
								placeholder="Juan Pérez · ACME SAS"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</label>
						<label>
							Correo corporativo
							<input
								type="email"
								name="email"
								placeholder="logistica@empresa.com"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</label>
						<label>
							Detalle del servicio
							<textarea
								name="message"
								rows="4"
								placeholder="Importación marítima desde Asia"
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
						</label>
						<button type="submit" className="btn primary">
							Agendar llamada
						</button>
					</form>
				</section>
			</main>
		</>
	);
}

export default App;
