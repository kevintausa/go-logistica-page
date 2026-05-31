import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();
	const isHome = location.pathname === '/';

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const scrollToSection = (id) => {
		closeMenu();
		if (isHome) {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<Link to="/" className="navbar__logo" onClick={closeMenu}>
					<img src="/logo.png" alt="GO Logística Internacional" />
				</Link>

				<button
					className={`navbar__toggle ${isMenuOpen ? 'active' : ''}`}
					aria-label="Toggle menu"
					onClick={toggleMenu}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
					<li>
						{isHome ? (
							<a href="#servicios" onClick={() => scrollToSection('servicios')}>
								Servicios
							</a>
						) : (
							<Link to="/#servicios" onClick={closeMenu}>
								Servicios
							</Link>
						)}
					</li>
					<li>
						{isHome ? (
							<a href="#proceso" onClick={() => scrollToSection('proceso')}>
								Proceso
							</a>
						) : (
							<Link to="/#proceso" onClick={closeMenu}>
								Proceso
							</Link>
						)}
					</li>
					<li>
						{isHome ? (
							<a href="#quienes-somos" onClick={() => scrollToSection('quienes-somos')}>
								Quiénes somos
							</a>
						) : (
							<Link to="/#quienes-somos" onClick={closeMenu}>
								Quiénes somos
							</Link>
						)}
					</li>
					<li>
						{isHome ? (
							<a href="#contacto" className="navbar__cta" onClick={() => scrollToSection('contacto')}>
								Contacto
							</a>
						) : (
							<Link to="/#contacto" className="navbar__cta" onClick={closeMenu}>
								Contacto
							</Link>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
}
