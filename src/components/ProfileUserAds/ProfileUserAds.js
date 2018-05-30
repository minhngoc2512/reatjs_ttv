import { Component } from "react";
import { object } from "prop-types";
export default class ProfileUserAds extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12 u-detail-r-2">
        <div className="u-row-3">
          <center>
            <img src="./img/Banner-Ads-mac.jpg" />
          </center>
        </div>
      </div>
    );
  }
}
