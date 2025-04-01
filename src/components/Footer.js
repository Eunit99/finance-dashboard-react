import React from "react";
import { useLocation } from "react-router-dom"

const Footer = () => {
  const location = useLocation();
  let currentWindow = location.pathname;

  let ourBaseURL = "/Login";
  console.log(currentWindow)

  if (currentWindow.includes(ourBaseURL)) {
    console.log("We are at the authentication pages");
  } else {
    return (
      <>


        <footer className="footer mt-5">
          <div className="container-fluid ">
            <div className="row ">
              <div className="col-sm-6 col-6">
                <span className="this-year"></span> © Tryve!
              </div>
              <div className="col-sm-6 col-6">
                <div className="text-sm-end d-sm-block ">
                  Emmanuel Uchenna for Tryve Assessment
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }

  if (currentWindow === "/") {
    console.log("we are at the home page")
  }


}

export default Footer;
