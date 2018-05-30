import React from "react";
import { object } from "prop-types";

export default class IndustrialDetail extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <li>
        <a href="province.html">VSIP ( 100 )</a>
      </li>
    );
  }
}
