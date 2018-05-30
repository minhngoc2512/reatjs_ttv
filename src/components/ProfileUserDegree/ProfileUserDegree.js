import { Component } from "react";
import { object } from "prop-types";
export default class ProfileUserDegree extends Component {
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
            <i className="fa fa-graduation-cap" aria-hidden="true" /> Bằng cấp
            <a href="#">
              <i className="fa fa-pencil icon-u-float" aria-hidden="true" />
            </a>
          </h3>
        </div>
        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
          <div className="row u-inf-7">
            <div className="row col-md-12 col-sm-12 col-xs-12">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <h3>Kế toán</h3>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <h3>Đại học</h3>
              </div>
            </div>
            <div className="row col-md-12 col-sm-12 col-xs-12">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <h3>Đại học tp Hồ Chí Minh</h3>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <h3>20/10/2010- 20/10/2011</h3>
              </div>
            </div>
          </div>
          <div className="row u-inf-7">
            <div className="row col-md-12 col-sm-12 col-xs-12">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <h3>Kế toán</h3>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <h3>Đại học</h3>
              </div>
            </div>
            <div className="row col-md-12 col-sm-12 col-xs-12">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <h3>Đại học tp Hồ Chí Minh</h3>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <h3>20/10/2010- 20/10/2011</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
