import './About.css'
function About(params) {
    return(
        <section className="about" id="About">
            <div className="about-image">
                <img src="/Picture.png" alt="about-image" />
            </div>
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    I am a computer Engineering student specializing in intelligent Logistics Systems, with a strong interest in technology, Software developement, and Artificial intelligence.
                    I have developed skills in web developement, Python programming, and graphics design, allowing me to combine technical knowledge with creativity to build useful and engaging digital solutions.
                    I am continously learning and exploring new technologies, with the goal of improving my skills and developing intelligent solutions to real-world problems, particularly in the fields of Logistics, automation and digital transformation
                    My ambition is to become a skilled technology professional capable of turning ideas into innovative solutions that create real value.
                </p>
                <div className="about-info">
                    <p><strong>Education:</strong> Computer Engineering</p>
                    <p><strong>Specialization:</strong> Intelligent Logistics Systems</p>
                    <p><strong>Skills:</strong> Web developement, Python, Graphic Design</p>
                    <p><strong>Interest:</strong> AI, Software Developement, Technology</p>
                </div>
            </div>
        </section>
    );
    
}
export default About;