import { Component } from "react";
import { object } from "prop-types";
import ProfileUserAds from "../ProfileUserAds";
export default class ProfileUserBar extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="row col-md-4 u-margin-bottom-2">
        <div className="col-md-12 u-detail-r-2">
          <div className="u-row-1">
            <h3 className="u-detail-inf-1">Mức độ hoàn thành CV</h3>
            <h3>
              Hồ sơ của bản hiện:
              <span>Đã hoàn thành</span>
            </h3>
          </div>
        </div>
        <div className="col-md-12 u-detail-r-2">
          <div className="u-row-2">
            <h3 className="u-detail-inf-1">Cài đặt</h3>
            <h3 className="text-u-3">
              Hiện hồ sơ với nhà tuyển dụng:
              <select className="form-control form-control-sm u-status">
                <option value="on">Bật</option>
                <option value="off">Tắt</option>
              </select>
            </h3>
            <div>
              <label> Tải lên CV của bạn (Hỗ trợ file doc, docx, pdf):</label>
              <input type="file" value="Tải hồ sơ lên" />
            </div>
            <center>
              <button className="btn-u-detail">
                <i className="fa fa-refresh" aria-hidden="true" /> LÀM MỚI CV
              </button>
            </center>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 u-detail-r-2">
          <div className="u-row-3">
            <h3 className="u-detail-inf-1">Thống kê CV của bạn</h3>
            <h3 className="text-u-r-3 col-md-9 col-sm-9 col-xs-9">
              Lượt xem CV của bạn trong 30 ngày qua:
            </h3>
            <div className="col-md-3 col-sm-3 col-xs-3">
              <div className="count-job"> 20</div>
            </div>
          </div>
        </div>
        <ProfileUserAds />
      </div>
    );
  }
}
