import './hero.css';
function Hero(params) {
    return (
        <section className="hero">
            <h1>Hi, I'm   
                 <span>  William</span>
            </h1>
            <h2>AI & Software Engineering student</h2>
            <p>
                I am a passionate computer Engineering student specializing in Intelligent Logisticts systems. 
                   I have skills in web developement, python programming, and graphics design. 
                   I am passionate about technology and enjoy building innovatif digital solutions that combine Software, creativity, and intelligent systems.
            </p>
            <div className="hero-buttons">
                <a href="#projects" className='projects-btn'> View My Projects</a>
                <a href="#Contact" className='contact-btn'> Contact Me</a>

            </div>
        </section>
    
    );
    
}
export default Hero;