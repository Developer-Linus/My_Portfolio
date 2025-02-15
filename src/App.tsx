import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="#">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero-section d-flex align-items-center text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold mb-4">Software Developer</h1>
              <p className="lead mb-4">Crafting elegant solutions to complex problems</p>
              <div className="social-links mb-4">
                <a href="#" target="_blank" rel="noopener noreferrer"><Github /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                <a href="mailto:your.email@example.com"><Mail /></a>
              </div>
              <Link to="about" smooth={true} duration={500} className="btn btn-outline-light btn-lg">
                Learn More <ChevronDown className="ms-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding">
        <div className="container">
          <h2 className="text-center mb-5">About Me</h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop&q=80" 
                   alt="Developer at work" 
                   className="img-fluid rounded shadow-lg" />
            </div>
            <div className="col-lg-6">
              <p className="lead">
                I'm a passionate software developer with a focus on creating impactful web applications.
                My journey in technology is driven by curiosity and a desire to build solutions that make a difference.
              </p>
              <div className="mt-4">
                <h5>What I do:</h5>
                <ul className="list-unstyled">
                  <li>✓ Full-stack Web Development</li>
                  <li>✓ Mobile App Development</li>
                  <li>✓ Cloud Architecture</li>
                  <li>✓ Technical Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Featured Projects</h2>
          <div className="row g-4">
            {[1, 2, 3].map((project) => (
              <div key={project} className="col-lg-4">
                <div className="card project-card h-100">
                  <img src={`https://images.unsplash.com/photo-${project === 1 ? '1555099652-4c6f474a5831' : 
                                                                   project === 2 ? '1537884944318-390069bb8665' : 
                                                                   '1562907550-2240ad87f003'}?w=800&auto=format&fit=crop&q=80`} 
                       className="card-img-top" alt="Project preview" />
                  <div className="card-body">
                    <h5 className="card-title">Project {project}</h5>
                    <p className="card-text">A brief description of the project and the technologies used.</p>
                    <a href="#" className="btn btn-outline-primary">
                      View Project <ExternalLink size={16} className="ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding">
        <div className="container">
          <h2 className="text-center mb-5">Skills & Technologies</h2>
          <div className="row g-3">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Git'].map((skill) => (
              <div key={skill} className="col-6 col-md-3">
                <div className="skill-item">
                  <h5 className="mb-0">{skill}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Get In Touch</h2>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form className="contact-form">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows={5} placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;