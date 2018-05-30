import { Component } from "react";
import { object } from "prop-types";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
export default class EmployerHome extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <main>
        <section className="category">
          <div className="container form-wrapper">
            <h2>Hàng Ngàn Công Việc Mới Đang Chờ Bạn</h2>
            <span>Đúng Người - Đúng Việc - Nhanh Chóng - Chính Xác</span>
          </div>
        </section>
        <SearchBarNotIndex />
        <div className="container-fluid page-background-1">
          <div className="col-md-8 col-md-offset-2 employer-home">
            <div className="col-md-6 col-sm-12">
              <div className="alert-employer">
                <h4>ĐĂNG TIN TUYỂN DỤNG</h4>
                <div id="adc_TOP_COMPANIES" className="animated fadeIn">
                  <ul>
                    <li>
                      <i className="fa fa-circle dot-e" aria-hidden="true" />Đăng
                      tin
                      <span>nhanh chóng, chính xác</span>
                    </li>
                    <li>
                      <i className="fa fa-circle dot-e" aria-hidden="true" />Tiếp
                      cận tới hơn
                      <span>100.000</span> người lao động
                    </li>
                    <li>
                      <i className="fa fa-circle dot-e" aria-hidden="true" />Dịch
                      vụ
                      <span>Giới thiệu</span> về công ty bằng video
                    </li>
                    <li>
                      <i className="fa fa-circle dot-e" aria-hidden="true" />Quản
                      lý dữ liệu
                      <span>an toàn và hợp lý</span>
                    </li>
                    <center>
                      <button className="fa fa-paper-plane-o btn-e-home">
                        {" "}
                        ĐĂNG TIN
                      </button>
                    </center>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 block-e-2">
              <div className="alert-employer">
                <h4>TÌM KIẾM HỒ SƠ</h4>
                <div id="adc_TOP_COMPANIES" className="animated fadeIn">
                  <ul>
                    <li>
                      <i className="fa fa-circle dot-e" aria-hidden="true" />Tìm
                      kiếm ứng viên
                      <span>nhanh chóng</span>
                    </li>
                    <li>
                      <i className="fa fa-circle dot-e" aria-hidden="true" />Quản
                      lý kết quả tìm kiếm
                      <span>thông minh</span>
                    </li>
                    <li>
                      <i className="fa fa-circle dot-e" aria-hidden="true" />
                      <span>Lưu trữ </span>CV của ứng viên tiềm năng
                    </li>
                    <li>
                      <i className="fa fa-circle dot-e" aria-hidden="true" />Dữ
                      liệu CV ứng viên
                      <span>phong phú</span>
                    </li>
                    <center>
                      <button className="fa fa-search btn-e-home">
                        {" "}
                        TÌM KIẾM
                      </button>
                    </center>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
