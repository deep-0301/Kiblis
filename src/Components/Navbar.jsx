import React from "react";

function Navbar() {
  return (
    <>
      <div className="row navs-style mt-4">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div className="col-xs-6 col-md-6 mx-5 title-nav">
            <a class="navbar-brand" href="#">
              Kiblis
            </a>
          </div>
          <div className="col-xs-6 col-md-6">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav nav-left text-left">
                <a class="nav-item nav-link mx-4 active" href="#">
                  Home
                </a>
                <a class="nav-item nav-link mx-4 active" href="#">
                  Contact
                </a>
                <a class="nav-item nav-link mx-4 active" href="#">
                  Services
                </a>
                <a class="nav-item nav-link mx-4 active btn-nav" href="#">
                  Explore lands
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="home">
        <div className="greeting text-light">
          Trusted Real Estate Developer In Nigeria
          <p className="greeting-message">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pellentesque in massa in eget blandit sit duis lacus.
            Euismod eu elit dui nec tellus in tempus."
          </p>
          <br />
          <a href="">
            <button className="register-button">Explore Land</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
