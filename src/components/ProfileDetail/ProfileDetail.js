import { Component } from "react";
import { object } from "prop-types";
export default class ProfileDetail extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="col-md-8 col-md-offset-2 container-employer">
        <div className="row">
          <div className="col-md-3 col-sm-3 img-profile">
            <img src="http://reels.syntheticpictures.com/img/directors/blank-avatar.png" />
          </div>
          <div className="col-md-9 col-sm-9 profile-summary">
            <h3>
              <span>NGUYỄN VĂN NAM</span>
            </h3>
            <h3>
              <b>Giới tính:</b> Nam
            </h3>
            <h3>
              <b>Ngày sinh:</b> 20/10/2017
            </h3>
            <h3>
              <b>Địa chỉ:</b> Số 123 đường Nguyễn Văn Ninh, tỉnh Long An{" "}
            </h3>
            <a href="#">
              <button className="btn btn-warning">
                <i className="fa fa-download" aria-hidden="true" />Tải Hồ Sơ{" "}
              </button>
            </a>
            <a href="#">
              <button className="btn btn-warning padding-btn-pro">
                <i className="fa fa-floppy-o" aria-hidden="true" />Lưu Hồ Sơ{" "}
              </button>
            </a>
            <a href="#">
              <button className="btn btn-warning">
                <i className="fa fa-share-alt" aria-hidden="true" />Chia sẻ{" "}
              </button>
            </a>
          </div>
        </div>
        <div className="line-profile" />
        <div className="profile-detail">
          <h3 className="title-profile">
            <i className="fa fa-list" aria-hidden="true" /> Thông tin về ứng
            viên:
          </h3>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Ngành nghề chuyên môn:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>Kế toán</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Bằng cấp cao nhất:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>Cử nhân</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Số năm kinh nghiệm:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>2 năm</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Kỹ năng bản thân:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>Kỹ năng chuyên môn, thuyết trình, làm việc nhóm...</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Trình độ ngoại ngữ:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>Tiếng Anh ( Sơ cấp )</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b> Công ty làm việc gần nhất:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>Công ty TNHH ABC Việt Nam</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Công việc gần nhất:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>Kế toán</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Công việc mong muốn:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>Kế toán</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Cấp bậc hiện tại:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>Nhân viên</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Cấp bậc mong muốn:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>Trưởng Phòng</span>
            </div>
          </div>

          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Thu nhập hiện tại:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>8.000.000 VNĐ</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Thu nhập mong muốn:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>10.000.000 - 12.000.000 VNĐ</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Thu nhập mong muốn:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>10.000.000 - 12.000.000 VNĐ</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b> Nơi làm việc mong muốn:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>Long An</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Email liên hệ:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>namnv@gmail.com</span>
            </div>
          </div>
          <div className="col-md-12 clear-fix">
            <div className="col-md-4 col-sm-4">
              <span>
                <b>Số điện thoại liên hệ:</b>
              </span>
            </div>
            <div className="col-md-8 col-sm-8">
              <span>0987765432</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
