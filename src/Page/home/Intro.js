import React from "react";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-main">
        <div className="intro-main-left">
          <h1 className="intro-heading">
            Sponsorship Made Easy for
            <span className="into-sub-heading">
              <span>
                Events
                Fests
                Brands
                Creators
              </span>
            </span>
          </h1>
          <p>
            Say goodbye to the hassle of finding the right sponsorship
            opportunities - sign up for Speezy now to start collaborating with
            brands, creators and fests like never before!
          </p>
        </div>
        <div className="intro-main-right">
          <img src="images/l1.svg" alt="illustraion" />
        </div>
      </div>
      <div className="intro-bottom">
        <h1 className="intro-bottom-heading">
          Simplify your
          <span>sponsorship</span>
          process and reach your marketing goals with
          <span>Brand Barter</span>
        </h1>
      </div>
    </div>
  );
}

export default Intro;
