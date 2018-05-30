import { Component } from "react";
import { object } from "prop-types";
export default class ManageUserPassword extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="col-md-8 col-md-offset-2 mn-pass-user-container">
        <div className="row mn-info-user">
          <div className="col-md-12 col-sm-12 padding-mn-pass-container">
            <h3 className="mn-title-pass">Đổi mật khẩu:</h3>
            <form className="form-group">
              <div className="col-md-12 col-sm-12">
                <div className="col-md-3 col-sm-3 mn-text-form">
                  <span>Mật khẩu hiện tại:</span>
                </div>
                <div className="col-md-6 col-sm-9">
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12  mn-user-margin-top">
                <div className="col-md-3 col-sm-3 mn-text-form">
                  <span>Mật khẩu mới:</span>
                </div>
                <div className="col-md-6 col-sm-9">
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12  mn-user-margin-top">
                <div className="col-md-3 col-sm-3 mn-text-form">
                  <span>Nhập lại mật khẩu mới:</span>
                </div>
                <div className="col-md-6 col-sm-9">
                  <input type="password" className="form-control" />
                </div>
              </div>

              <div className="col-md-12 col-xs-12 col-xs-offset-5  col-md-offset-3 btn-mn-user">
                <input type="submit" className="btn btn-info" value="Lưu" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
