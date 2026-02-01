import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<a href="/" className="navbar__logo">
					<img src="/logo.png" alt="GO Logística Internacional" />
				</a>

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
						<a href="#quienes-somos" onClick={closeMenu}>
							Quiénes somos
						</a>
					</li>
					<li>
						<a href="#servicios" onClick={closeMenu}>
							Servicios
						</a>
					</li>
					<li>
						<a href="#proceso" onClick={closeMenu}>
							Proceso
						</a>
					</li>
					<li>
						<a href="#contacto" className="navbar__cta" onClick={closeMenu}>
							Contacto
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
