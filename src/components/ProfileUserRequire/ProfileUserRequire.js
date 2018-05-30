import { Component } from "react";
import { object } from "prop-types";
export default class ProfileUserRequire extends Component {
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
            <i className="fa fa-suitcase" aria-hidden="true" /> Công việc mong
            muốn
            <a href="#">
              <i className="fa fa-pencil icon-u-float" aria-hidden="true" />
            </a>
          </h3>
        </div>
        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
          <div className="col-md-6 col-sm-6  u-inf-8">
            <h3>Nơi làm việc:</h3>
            <h3>Vĩnh Long</h3>
          </div>
          <div className="col-md-6 col-sm-6  u-inf-8">
            <h3>Nghành nghề:</h3>
            <h3>Kế toán/Tài chính</h3>
          </div>
          <div className="col-md-6 col-sm-6  u-inf-8">
            <h3>Mức lương mong muốn:</h3>
            <h3>6.000.000 - 10.000.000 VND</h3>
          </div>
          <div className="col-md-6 col-sm-6 u-inf-8">
            <h3>Phụ cấp khác:</h3>
            <h3 />
          </div>
        </div>
      </div>
    );
  }
}
