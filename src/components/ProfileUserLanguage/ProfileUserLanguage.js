import { Component } from "react";
import { object } from "prop-types";
export default class ProfileUserLanguage extends Component {
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
        <div className=" col-md-12">
          <h3 className="u-detail-inf-1">
            <i className="fa fa-language" aria-hidden="true" /> Ngoại ngữ
            <a href="#">
              <i className="fa fa-pencil icon-u-float" aria-hidden="true" />
            </a>
          </h3>
        </div>
        <div className="row u-inf-language-1">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <h3>Ngôn ngữ</h3>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <h3>Bằng cấp</h3>
          </div>
        </div>
        <div className="row u-inf-language-2">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <h3>Tiếng Anh</h3>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <h3>Sơ cấp</h3>
          </div>
        </div>
        <div className="row u-inf-language-2">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <h3>Tiếng Nhật</h3>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <h3>Sơ cấp</h3>
          </div>
        </div>
      </div>
    );
  }
}
