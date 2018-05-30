import { Component } from "react";
import { object } from "prop-types";

export default class CompanyAds01 extends Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <div className="banner-job-company col-sm-12">
        <center>
          <img src="https://i.pinimg.com/736x/c2/6d/e8/c26de8016363169c5b81017520e5b51c--pole-banners-web-banners.jpg" />
        </center>
      </div>
    );
  }
}
