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
			title: 'Importación y exportación',
			description:
				'Acompañamos cada embarque aéreo o marítimo con control integral, gestión documental y optimización de tiempos.',
		},
		{
			title: 'Gestión logística local (OTM)',
			description:
				'Coordinamos la movilización nacional de la carga con trazabilidad, seguridad y cumplimiento regulatorio.',
		},
		{
			title: 'Almacenaje inteligente',
			description:
				'Centros aliados con sistemas de control, custodia y administración precisa de inventarios.',
		},
		{
			title: 'Seguro de carga',
			description:
				'Protegemos cada operación con pólizas a la medida que minimizan riesgos durante todo el trayecto.',
		},
		{
			title: 'Transporte terrestre',
			description:
				'Flota confiable y monitoreada para entregas puntuales a nivel local y nacional.',
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
				<section className="hero">
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
					<div className="hero__visual" aria-hidden="true">
						<div className="orb orb--primary"></div>
						<div className="orb orb--secondary"></div>
						<div className="hero__card">
							<p>Operación en curso</p>
							<strong>Manifiesto 5482 · ETA 48h</strong>
							<span>Trazabilidad activa 24/7</span>
						</div>
					</div>
				</section>

				<section className="stats">
					{stats.map(({ label, value }, index) => (
						<article className="stat" data-animate key={index}>
							<p className="stat__value">{value}</p>
							<p className="stat__label">{label}</p>
						</article>
					))}
				</section>

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

				<section className="services" id="servicios">
					<div className="section-heading">
						<p className="tag">Nuestros servicios</p>
						<h2>Operaciones diseñadas para cada cadena logística</h2>
					</div>
					<div className="services__grid">
						{services.map(({ title, description }, index) => (
							<article className="service" data-animate key={index}>
								<h3>{title}</h3>
								<p>{description}</p>
								<button className="service__cta">Solicitar detalle</button>
							</article>
						))}
					</div>
				</section>

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

				<section className="cta" id="contacto">
					<div>
						<p className="tag">Hablemos hoy</p>
						<h2>Agenda una consultoría logística</h2>
						<p>
							Cuéntanos tu reto de transporte o comercio exterior y diseñaremos un plan a medida
							con los mejores aliados en cada país.
						</p>
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
