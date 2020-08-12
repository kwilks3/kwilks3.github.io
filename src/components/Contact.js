import React from "react";
import { FiMapPin, FiMail } from "react-icons/fi";
export default function Contact() {
  return (
    <section class="mb-4 container" style={{ paddingTop: "10%" }}>
      {/* <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contact Me
      </h2> */}

      <div class="row" style={{ display: "flex" }}>
        <div class="col-sm-9 mb-sm-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div class="row" style={{ justifyContent: "center" }}>
              <div class="col-sm-6">
                <div class="sm-form mb-0">
                  <label for="name" class="">
                    Your name
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
                    Your email
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
            <button
              class="btn btn-dark"
              onclick={() => {
                alert(
                  "My inbox is full at this time. Please try again later. Thank you!"
                );
              }}
            >
              Send
            </button>
          </div>

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
