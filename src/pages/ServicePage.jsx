import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ServicePage = ({ title, description, image, benefits, content, keywords }) => {
	useEffect(() => {
		document.title = `${title} | GO Logística Internacional`;
		
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute('content', description);
		} else {
			const meta = document.createElement('meta');
			meta.name = 'description';
			meta.content = description;
			document.head.appendChild(meta);
		}

		const metaKeywords = document.querySelector('meta[name="keywords"]');
		if (metaKeywords) {
			metaKeywords.setAttribute('content', keywords);
		} else {
			const meta = document.createElement('meta');
			meta.name = 'keywords';
			meta.content = keywords;
			document.head.appendChild(meta);
		}
	}, [title, description, keywords]);

	return (
		<>
			<Navbar />
			<main className="page">
				<section className="service-hero">
					<div className="service-hero__image">
						<img src={image} alt={title} />
						<div className="service-hero__overlay"></div>
					</div>
					<div className="service-hero__content">
						<p className="tag">Servicios GO Logística</p>
						<h1>{title}</h1>
						<p className="service-hero__desc">{description}</p>
					</div>
				</section>

				<section className="service-detail">
					<div className="service-detail__grid">
						<div className="service-detail__body">
							<h2>¿En qué consiste?</h2>
							<div className="service-detail__text">
								{content.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
							</div>

							<h2>Beneficios clave</h2>
							<ul className="service-detail__benefits">
								{benefits.map((benefit, index) => (
									<li key={index}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
										<span>{benefit}</span>
									</li>
									))}
								</ul>

							<div className="service-detail__cta">
								<Link to="/" className="btn ghost">
									← Volver a inicio
								</Link>
								<a href="/#contacto" className="btn primary">
									Solicitar este servicio
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default ServicePage;
