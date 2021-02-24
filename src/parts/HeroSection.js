import React from "react";
import HeroImage from "asset/images/img-hero@2x.jpg";
import Button from "elements/Button";

export default function HeroSection(props) {
  const showRecommendedList = () => {
    window.scrollTo({
      top: props.refRecommendedList.current.offsetTop - 20,
      behavior: "smooth",
    });
  };

  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="font-weight-bold mb-3 text-secondary">
            Forget the work, <br />
            and get your next holiday.
          </h1>
          <p
            className="text-secondary font-weight-light mt-4"
            style={{ fontSize: 20, fontFamily: "Open Sans" }}
          >
            We provide what you need to enjoy your holiday with your family.
          </p>
          <Button
            className="btn px-5 mt-3 font-weight-bold text-white"
            isPrimary
            hasShadow
            onClick={showRecommendedList}
            style={{
              width: 250,
              height: 50,
              fontSize: 24,
            }}
          >
            Show Me
          </Button>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <img
            src={HeroImage}
            alt="Hero"
            className="img img-fluid"
            style={{ height: 550 }}
          />
        </div>
      </div>
    </section>
  );
}
