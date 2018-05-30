import React from "react";
import Image from "./../Image";
import { object } from "prop-types";

export default class CompanyLogo extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <a className="cusLogo" target="_blank" href="#">
        <img
          className="salesLogoImage img-responsive"
          src="/images/nhatuyendung.png"
        />
      </a>
    );
  }
}
