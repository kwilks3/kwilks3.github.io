import React from "react";
import { FiMapPin, FiMail } from "react-icons/fi";
import Form from "react-bootstrap";

export default function Contact() {
  return (
    <section class="mb-4 container" style={{ paddingTop: "10%" }}>
      <div class="row">
        <div class="col-sm-9 mb-sm-0 mb-5">
          {/* form asking for user information */}
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div class="row">
              <div class="col-sm-6">
                <div class="sm-form mb-0">
                  <label for="name" class="">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="sm-form mb-0">
                  <label for="email" class="">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row" style={{ justifyContent: "center" }}>
              <div class="col-sm-12">
                <div class="sm-form mb-0">
                  <label for="subject" class="">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="row " style={{ justifyContent: "center" }}>
              <div class="col-sm-12">
                <div class="sm-form">
                  <label for="message">Your message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    class="form-control sm-textarea"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </form>

          <div class="text-center ">
            {/* on click of send button provide an alert because I do not want to be contacted using this form */}
            <button
              class="btn btn-dark"
              onClick={() => {
                alert(
                  "Contact me using my LinkedIn profile for a faster response!"
                );
              }}
            >
              Send
            </button>
          </div>
          {/* location and email  */}
          <div class="row" style={{ justifyContent: "center" }}>
            {/* <ul class="list-unstyled mb-0"> */}
            <div class="col text-center">
              <FiMapPin />
              <p>Austin, Tx</p>
            </div>

            <div class="col  text-center">
              <FiMail />
              <p>wilks.kimberly@gmail.com</p>
            </div>
            {/* </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
}
