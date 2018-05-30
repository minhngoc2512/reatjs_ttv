import { Component } from "react";
import { object } from "prop-types";
export default class ManageUserInformation extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="col-md-8 col-md-offset-2 container-mn-user">
        <div className="row mn-info-user">
          <h4 className="title-mn-user">QUẢN LÍ TÀI KHOẢN</h4>
          <div className="col-md-12 col-sm-12">
            <h3>Thông tin cơ bản:</h3>
            <form className="form-group">
              <div className="col-md-12 col-sm-12">
                <div className="col-md-3 col-sm-3 mn-text-form">
                  <span>Họ và tên:</span>
                </div>
                <div className="col-md-6 col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username...."
                  />
                </div>
              </div>
              <div className="col-md-12 col-sm-12 mn-user-margin-top">
                <div className="col-md-3 col-sm-3 mn-text-form">
                  <span>Ngày sinh:</span>
                </div>
                <div className="col-md-6 col-sm-9">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12 mn-user-margin-top">
                <div className="col-md-3 col-sm-3 mn-text-form">
                  <span>Giới tính:</span>
                </div>
                <div className="col-md-6 col-sm-9">
                  <select className="form-control">
                    <option>Nam</option>
                    <option>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 mn-user-margin-top">
                <div className="col-md-3 col-sm-3 mn-text-form">
                  <span>Địa chỉ:</span>
                </div>
                <div className="col-md-6 col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12 mn-user-margin-top">
                <div className="col-md-3 col-sm-3 mn-text-form">
                  <span>Email:</span>
                </div>
                <div className="col-md-6 col-sm-9">
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12 mn-user-margin-top">
                <div className="col-md-3 col-sm-3 mn-text-form">
                  <span>Số điện thoại:</span>
                </div>
                <div className="col-md-6 col-sm-9">
                  <input type="number" className="form-control" />
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
