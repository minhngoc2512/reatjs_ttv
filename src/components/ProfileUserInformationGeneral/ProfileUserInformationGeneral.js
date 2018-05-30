import { Component } from "react";
import { object } from "prop-types";
export default class ProfileUserInformationGeneral extends Component {
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
        <div className=" col-md-12 col-sm-12">
          <h3 className="u-detail-inf-1">
            <i className="fa fa-bars" aria-hidden="true" /> Thông tin chung
            <a href="#">
              <i className="fa fa-pencil icon-u-float" aria-hidden="true" />
            </a>
          </h3>
        </div>
        <div className="col-md-12 col-sm-12 u-detail-inf-2">
          <div className=" col-md-6 col-sm-6">
            <h3>
              <b>Nghành nghề:</b> Kế toán
            </h3>
          </div>
          <div className="col-md-6 col-sm-6">
            <h3>
              <b>Nơi làm việc:</b> Long An
            </h3>
          </div>
        </div>
        <div className=" col-md-12 col-sm-12 u-detail-inf-2">
          <div className=" col-md-6 col-sm-6">
            <h3>
              <b>Loại hình công việc:</b> Full Time
            </h3>
          </div>
          <div className="col-md-6 col-sm-6">
            <h3>
              <b> Cấp bậc:</b> Nhân viên
            </h3>
          </div>
        </div>
        <div className=" col-md-12 col-sm-12 u-detail-inf-2">
          <div className=" col-md-6 col-sm-6">
            <h3>
              <b>Mức lương hiện tại:</b> 6.000.000 VND
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
