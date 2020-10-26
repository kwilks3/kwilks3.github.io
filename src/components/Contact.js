import React from "react";
import { FiMapPin, FiMail } from "react-icons/fi";
import Background from "../img/demo-image-02.jpg";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBIcon,
  MDBInput,
} from "mdbreact";

import Helmet from "react-helmet";

export default function Contact() {
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

      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
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
          </MDBCol>
          <MDBCol md="6">
            <MDBCard
              className="card-image justify-content-lg-center "
              style={{
                // height: "78%",
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)",
              }}
            >
              <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                <div className="text-center">
                  <h3
                    style={{ marginTop: "0px" }}
                    className="green-text font-weight-bold"
                  >
                    <strong>Send an Email </strong>
                  </h3>
                </div>
                <form>
                  <div className="black-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />

                    <MDBInput
                      type="textarea"
                      rows="2"
                      label="Your message"
                      icon="pencil-alt"
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="dark">
                      Send
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-md-center">
          <MDBCol>
            {/* <ul class="list-unstyled mb-0"> */}
            <div class="col text-center">
              <FiMapPin />
              <p>Austin, Tx</p>
            </div>
          </MDBCol>
          <MDBCol>
            <div class="col  text-center">
              <FiMail />
              <p>wilks.kimberly@gmail.com</p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
