import React from "react";
import { object } from "prop-types";

export default class HomeAds1 extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <div className="col-md-12 col-sm-6">
        <h4>Quang cao</h4>
      </div>
    );
  }
}
