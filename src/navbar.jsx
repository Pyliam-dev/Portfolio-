import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">

            <div className="container">

                <a className="navbar-brand fw-bold" href="#home">
                    William
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#home">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#About">
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#skills">
                                Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                Projects
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;