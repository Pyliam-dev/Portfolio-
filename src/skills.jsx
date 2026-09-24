import './skills.css'
import { Code2, Server, BrainCircuit, Palette, Laptop } from "lucide-react";
function Skills(params) {
    return(
        <section className="skills" id="skills">
            <h2>My Skills</h2>
            <div className="skill-container">
                <div className="skill-card">
                    <Code2 className='skill-icon'/>
                    <h3>Frontend Developement</h3>
                    <p>
                        I build modern and responsive user interface using HTML, CSS, JavaScript and 
                    </p>
                </div>
                <div className="skill-card">
                    <Server className='skill-icon'/>
                    <h3>Backend Developement</h3>
                    <p>
                        I develop server-side appliations and APIs using PHP, Python and Django, with a focus on building reliable and efficient Systems

                    </p>
                </div>
                <div className="skill-card">
                    <BrainCircuit className='skill-icon'/>
                    <h3>Python and intelligent Systems</h3>
                    <p>
                        I use python for application developement, automation and exploring intelligent solutions related to Artificial Intelligence.

                    </p>
                </div>
                <div className="skill-card">
                    <Palette className='skill-icon'/>
                    <h3>Graphic Design</h3>
                    <p>
                        I create logos, flyers and digital visual content, combining creativity with technical skills.

                    </p>
                </div>
                <div className='skill-card'>
                    <Laptop className='skill-icon'/>
                    <h3>IT Support & Maintenance</h3>
                        <p>
                            I install and configure software and drivers, troubleshoot software issues, and provide technical support for different types of computers.
                        </p>
                </div>

            </div>
        </section>


    );
    
}
export default Skills;
