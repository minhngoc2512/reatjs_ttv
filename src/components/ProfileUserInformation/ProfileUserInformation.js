import { Component } from "react";
import { object } from "prop-types";
export default class ProfileUserInformation extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="row col-md-12 u-detail-r-1">
        <div className="col-md-3 col-sm-3">
          <img
            className="avata-user-detail-r-1"
            src="http://reels.syntheticpictures.com/img/directors/blank-avatar.png"
          />
        </div>
        <div className="col-md-6 col-sm-6 inf-user-r-1">
          <h3>NGUYỄN VĂN NAM</h3>
          <h3>
            <i className="fa fa-suitcase" aria-hidden="true" /> Kế toán
          </h3>
          <h3>
            <i className="fa fa-map-marker" aria-hidden="true" /> Long An
          </h3>
          <h3>
            <i className="fa fa-calculator" aria-hidden="true" /> 1 năm kinh
            nghiệm
          </h3>
        </div>
        <div className="col-md-3 col-sm-3">
          <button className="btn btn-basic button-u-r-1">
            <i className="fa fa-cloud-download" aria-hidden="true" /> Tải hồ sơ
          </button>
        </div>
      </div>
    );
  }
}
