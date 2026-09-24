
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                {/* Portfolio identity */}
                <div className="footer-brand">
                    <h2>William</h2>

                    <p>
                        Computer Engineering Student | Intelligent Logistics Systems
                    </p>
                </div>

                {/* Quick navigation links */}
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>
                    © 2026 William. All rights reserved.
                </p>
            </div>

        </footer>
    );
}

export default Footer;
