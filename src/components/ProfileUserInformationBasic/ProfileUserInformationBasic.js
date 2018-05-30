import { Component } from "react";
import { object } from "prop-types";
export default class ProfileUserInformationBasic extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="row col-md-12  u-detail-r-1">
        <div className="col-md-12 ">
          <h3 className="u-detail-inf-1">
            <i className="fa fa-user" aria-hidden="true" /> Thông tin cơ bản
            <a href="#">
              <i className="fa fa-pencil icon-u-float" aria-hidden="true" />
            </a>
          </h3>
        </div>
        <div className="col-md-12 u-detail-inf-2">
          <div className=" col-md-6">
            <h3>
              <b>Số điện thoại:</b> 0923423423
            </h3>
          </div>
          <div className="col-md-6">
            <h3>
              <b>Email:</b> useremail@email.com
            </h3>
          </div>
        </div>
        <div className=" col-md-12 u-detail-inf-2">
          <div className=" col-md-6">
            <h3>
              <b>Giới tính:</b> Nam
            </h3>
          </div>
          <div className="col-md-6">
            <h3>
              <b> Tình trạng hôn nhân:</b> Độc thân
            </h3>
          </div>
        </div>
        <div className="col-md-12 u-detail-inf-2">
          <div className=" col-md-6">
            <h3>
              <b>Địa chỉ:</b> Long An
            </h3>
          </div>
          <div className="col-md-6">
            <h3>
              <b>Quốc tịch:</b> Việt Nam
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
