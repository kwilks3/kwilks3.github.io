import React from "react";
import pubioimage from "../img/pubioimages.png";
import codequiz from "../img/quiz.png";
import weather from "../img/weather.png";

export default function Projects() {
  return (
    <>
      <section id="projects" class="projects-section bg-light">
        <p class="text-center">
          {" "}
          Click the project title to head to the GitHub repo or the project
          image to head to the deployed page. Note: PubIO does not have a
          deployed page since it is a mobile app.{" "}
        </p>
        <div class="container">
          <div class="row justify-content-center no-gutters project-info">
            <div class="col-sm-6">
              <a href="https://kwilks3.github.io/Code-Quiz/">
                <img class="img-fluid" src={codequiz} alt="code quiz" />
              </a>
            </div>
            <div class="col-sm-6 order-sm-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-sm-right">
                    <h4 class="text-white">
                      <a href="https://github.com/kwilks3/Code-Quiz">
                        Code Quiz
                      </a>
                    </h4>
                    <p class="text-white">
                      Take this quick code quiz to test your JavaScript
                      knowledge.{" "}
                    </p>
                    <hr class="d-none d-sm-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center no-gutters project-info">
            <div class="col-sm-6">
              <img
                class="img-fluid"
                src={pubioimage}
                alt="project screenshots"
              />
            </div>
            <div class="col-sm-6 order-sm-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-sm-right">
                    <h4 class="text-white">
                      <a href="https://github.com/pubIO-2020/pubIO">PubIO</a>
                    </h4>
                    <p class="text-white">
                      A bar crawl application that allows users to partake in
                      bar crawls and gain access to exclusive deals.
                    </p>
                    <hr class="d-none d-sm-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center no-gutters project-info">
            <div class="col-sm-6">
              <a href="https://kwilks3.github.io/WeatherDashboard/">
                <img class="img-fluid" src={weather} alt="weather dashboard" />
              </a>
            </div>
            <div class="col-sm-6 order-sm-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-sm-right">
                    <h4 class="text-white">
                      <a href="https://github.com/kwilks3/WeatherDashboard">
                        Weather Dashboard
                      </a>
                    </h4>
                    <p class="text-white">
                      Find weather information on whatever city you're
                      interested in!
                    </p>
                    <hr class="d-none d-sm-block mb-0 mr-0" />
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
