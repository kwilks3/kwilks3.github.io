import React from "react";
import ProfileImage from "../img/profile.png";
import { FiMapPin, FiMail } from "react-icons/fi";

export default function About() {
  return (
    <>
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
            <div class="col">
              <img
                src={ProfileImage}
                class="img-fluid"
                id="profile"
                alt="Kim"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8 mx-auto">
              <h2 class="text-white mb-4">About Me</h2>
              <p class="text-white-50">
                I am currently a Systems Project manager at Facebook and a
                student of the Full Stack Development bootcamp at the University
                of Texas - Austin. I received my BSBA in Business Analytics from
                the University of Miami in 2017.
              </p>
              <a
                href="https://docs.google.com/document/d/1HCgP_k712FAzgPRYCwjFyd4xAfmsmnHmJbJ9x14sQcM/edit?usp=sharing"
                target="_blank"
              >
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
