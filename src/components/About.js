import React from "react";
import ProfileImage from "../img/profile.png";
import Resume from "../assets/KWilksResumeEng.pdf";
import { FiMapPin, FiMail } from "react-icons/fi";
import Helmet from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
        ></script>
      </Helmet>
      {/* heading section with rose background image, name, and occupation */}
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">Kimberly Wilks</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">Software Engineer</h2>
          </div>
        </div>
      </header>
      {/* Image of me and about me section  */}
      <section id="about" class="about-section text-center">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 mx-auto">
              <div
                // style={{ marginLeft: "30%" }}
                className="justify-content-lg-center LI-profile-badge"
                dataVersion="v1"
                data-size="large"
                data-locale="en_US"
                data-type="vertical"
                data-theme="dark"
                data-vanity="kimberlywilks"
              ></div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8 mx-auto">
              <h2 class="text-white mb-4" style={{ marginTop: "10%" }}>
                About Me
              </h2>
              <p class="text-white">
                I am a Quality Systems Project Manager at Facebook and a
                graduate of the Full Stack Development bootcamp at the
                University of Texas - Austin. As a Systems Project Manager, I
                have developed excellent cross-functional relationships and have
                been essential in driving projects through various technical and
                resourcing challenges to completion. I analyze system designs to
                ensure they accomplish all operational goals and communicate
                designs to non-technical audiences. In the last year, I have
                maintained my full-time role while becoming a more skilled and
                efficient developer. I am looking forward to a career of
                continuous learning and growth.
              </p>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                Click here to read more on my resume!
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* cards with location and email address */}
      <section class="contact-section bg-black">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <FiMapPin />
                  <h4 class="text-uppercase m-0">Location</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">Austin, TX</div>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <FiMail />
                  <h4 class="text-uppercase m-0">Email</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    <p>wilks.kimberly@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
