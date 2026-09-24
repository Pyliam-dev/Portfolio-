import { useState } from "react";
import "./contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <section className="contact" id="contact">

            <h2>Contact Me</h2>

            <p>
                Feel free to contact me if you have a project, opportunity,
                or question.
            </p>

            <div className="contact-info">

                <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:djomnangwilliam46@gmail.com">
                        djomnangwilliam46@gmail.com
                    </a>
                </p>

                <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+237687014876">
                        +237 687 014 876
                    </a>
                </p>

                <p>
                    <strong>Location:</strong> Cameroon
                </p>

            </div>

            <div className="social-links">

                <a href="#" target="_blank">
                    LinkedIn
                </a>

                <a href="#" target="_blank">
                    GitHub
                </a>

            </div>

            <form className="contact-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        placeholder="Write your message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type="submit">Send Message</button>

            </form>

        </section>
    );
}

export default Contact;