import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    // footer has LinkedIn and Github links
    <>
      <div class="social d-flex justify-content-center text-black-50">
        <a
          href="https://www.linkedin.com/in/kimberlywilks/"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-2"
        >
          {/* <i class="fab fa-linkedin"></i> */}
          <AiFillLinkedin color="black" size="30px" />
        </a>

        <a
          href="https://github.com/kwilks3"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-2"
        >
          <AiFillGithub color="black" size="30px" />
        </a>
      </div>

      <footer class="bg-black small text-center text-white-50">
        <div class="container">Copyright &copy; Kimberly Wilks 2020</div>
      </footer>
    </>
  );
}
