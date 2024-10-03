// components/Navbar.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu toggle

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoText}>Hospital Management</Link>
                </div>
                <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                    <Link href="/" className={styles.link} aria-label="Home">Home</Link>
                    <Link href="/appointments" className={styles.link} aria-label="Appointments">Appointments</Link>
                    <Link href="/contact" className={styles.link} aria-label="Contact Us">Contact Us</Link>
                    <Link href="/login" className={styles.link} aria-label="Login">Login</Link>
                    <Link href="/register" className={styles.link} aria-label="Register">Register</Link>
                </div>
                <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle navigation">
                    {/* You can add an icon here for better UX */}
                    ☰
                </button>
            </div>
        </nav>
    );
}
