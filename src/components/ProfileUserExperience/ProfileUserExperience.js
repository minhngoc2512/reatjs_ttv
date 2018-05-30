import { Component } from "react";
import { object } from "prop-types";
export default class ProfileUserExperience extends Component {
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
        <div className=" col-md-12 col-sm-12 col-xs-12">
          <h3 className="u-detail-inf-1">
            <i className="fa fa-bolt" aria-hidden="true" /> Kinh nghiệm làm việc
            <a href="#">
              <i className="fa fa-pencil icon-u-float" aria-hidden="true" />
            </a>
          </h3>
        </div>
        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
          <div className="row u-inf-6">
            <h3>Nhân việc kế toán</h3>
            <h3>Công Ty TNHH ABC</h3>
            <h3>
              từ 20/10/2017 - 20/10/2018
              <span>(12 tháng)</span>
            </h3>
          </div>
          <div className="row u-inf-6">
            <h3>Nhân việc kế toán</h3>
            <h3>Công Ty TNHH ABC</h3>
            <h3>
              từ 20/10/2017 - 20/10/2018
              <span>(12 tháng)</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
