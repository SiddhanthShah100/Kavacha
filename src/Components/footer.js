import React from 'react';
import '../Pages/App/App.css';

const Footer = () => {
  return (
    <div className='mt-4'>

<footer className="text-center text-lg-start bg-dark text-light">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href className="me-4 text-reset">
        <i className="fab fa-facebook-f" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-google" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-github" />
      </a>
    </div>
  </section>

  <section className>
    <div className="container text-center text-md-start mt-5">
    
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <p className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />KAVACHA
          </p>
          <p className='text'>
            "Women Safety App empowers women with geofencing, emergency contacts, and panic buttons. Real-time alerts and discreet distress signals provide security and peace of mind. Ensure safety anytime, anywhere with this essential tool."
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <p className="text-uppercase fw-bold mb-4">
            Useful links
          </p>
          <p>
            <a href= '#home' className="text-reset">Home</a>
          </p>
          <p>
            <a href="#about" className="text-reset">Contact-US</a>
          </p>
          <p>
            <a href="#download" className="text-reset">Download</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <p className="text-uppercase fw-bold mb-4">Contact</p>
          <p><i className="fas fa-home me-3" /> KJSIT,Sion,Mumbai</p>
          <p>
            <i className="fas fa-envelope me-3" />
            info.tech@somaiya.edu
          </p>
          <p><i className="fas fa-phone me-3" /> 91 24061403</p>
          <p><i className="fas fa-print me-3" /> + 91 24061403</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2024 Copyright:
    <a className="text-reset fw-bold" href="/"> KAVACHA</a>
  </div>
</footer>

    </div>
  )
}

export default Footer
