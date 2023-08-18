import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li>
                <strong>
                  Phone <i class="fa-solid fa-phone-volume nav-icon"></i>:
                </strong>{" "}
                512-650-7633
              </li>
              <li>
                <strong>
                  Email{" "}
                  <i className="fa-solid fa-envelope-open-text nav-icon">:</i>
                </strong>
                <a href="mailto:chad@kraus-fit.com">chad@kraus-fit.com</a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/chadwick-kraus/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/chadkraus87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
