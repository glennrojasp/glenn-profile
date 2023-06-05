import React, { useState } from 'react'

import './contact.style.scss';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/d2a0d450-6fd7-11ec-b2d5-af79f33d926c";

export const Contact = () => {

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact<br/><br/></h2>
            {/* <!--<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>--> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-white">
            <div className="text-2xl">Thank you!</div>
            <div className="text-md">We'll be in touch soon.</div>
        </div>
        </div>
      </div>
    </section>
    );
  }


  return(
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact<br/><br/></h2>
            {/* <!--<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>--> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="post" target="_blank">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="name" name="name" type="text" placeholder="Name *" required="required" data-validation-required-message="Porfavor ingrese su nombre." />
                    <p className="help-block text"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email" name="email" type="email" placeholder="Email *" required="required" data-validation-required-message="Porfavor ingrese su correo."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" name="phone" type="tel" placeholder="Phone" data-validation-required-message="Porfavor ingrese su numbero de telefóno."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" name="message" placeholder="Message *" required="required" data-validation-required-message="Porfavor ingrese un message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" className="btn btn-warning btn-xl text-uppercase" type="submit">Send Menssage</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}