import { Component } from "react";
import { object } from "prop-types";
import { push } from "react-router-redux";
import Slider from "react-slick";
import Image from "./../Image";

export default class SlideBanner extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  render() {
    const settings = {
      //   dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000
    };

    return (
      <Slider {...settings}>
        <div>
          <img
            src="/images/banner/Apparel-Far-Eastern.jpg"
            title="Công ty TNHH Apparel Far Eastern (Việt Nam)"
            alt="Công ty TNHH Apparel Far Eastern (Việt Nam)"
          />
        </div>
        <div>
          <img
            src="/images/banner/Gach_men_V.T.C.jpg"
            title="Công ty cổ phần gạch men VTC"
            alt="Công ty cổ phần gạch men VTC"
          />
        </div>
        <div>
          <img
            src="/images/banner/Huish_Outdoor.jpg"
            title="Công Ty TNHH Huish Outdoors Việt Nam"
            alt="Công Ty TNHH Huish Outdoors Việt Nam"
          />
        </div>
        <div>
          <img
            src="/images/banner/Simone.jpg"
            title="Công ty TNHH túi xách Simone Việt Nam"
            alt="Công ty TNHH túi xách Simone Việt Nam"
          />
        </div>
        <div>
          <img
            src="/images/banner/TVP1.jpg"
            title="Công Ty Cổ phần Thép TVP"
            alt="Công Ty Cổ phần Thép TVP"
          />
        </div>
      </Slider>
    );
  }
}
