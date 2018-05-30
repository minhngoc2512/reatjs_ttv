import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import config from "../../configs/appConfig";
import FacebookProvider, { Page } from "react-facebook";

export default class Footer extends Component {
  static contextTypes = {
    i18n: PropTypes.object
  };

  render() {
    const { l } = this.context.i18n;
    return (
      <div>
        <footer>
          <div className="container footer">
            <div className="row">
              <div className="col-lg-3 col-md-3 text-center">
                <Link to={"/"} title="Việc làm nam bộ" className="footer-logo">
                  <img
                    src="/images/logo-VLNB-e1500954157326.png"
                    alt="Việc làm nam bộ"
                  />
                </Link>{" "}
                <p> ©2017 Việc Làm Nam Bộ </p>{" "}
                <p> Công ty cổ phần Trái Thị Vàng </p>{" "}
              </div>{" "}
              <div className="col-lg-3 col-md-3">
                <h5> Thông Tin Liên hệ </h5>{" "}
                <ul className="quick-links">
                  <li>
                    <a href="javascript:void(0);">
                      <i className="fa fa-map-marker" /> Số nhà 15 ngõ 432 Đội
                      Cấn Ba Đình - Hà Nội{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    <a href="javascript:void(0);">
                      <i className="fa fa-phone" /> Điện thoại hỗ trợ:
                      0922097328{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    <a href="javascript:void(0);">
                      <i className="fa fa-envelope" /> Email: vlnb
                      @traithivang.vn{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    <a href="javascript:void(0);">
                      Chịu trách nhiệm nội dung: Nguyễn Mạnh Tiến{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    <a href="javascript:void(0);">
                      Giấy phép MXH số 193 / GP - BTTTT do Bộ Thông tin và
                      Truyền thông cấp ngày 14 tháng 4 năm 2016{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <div className="col-lg-3 col-md-3">
                <h5> Ứng Dụng Việc Làm Nam Bộ </h5>{" "}
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-6 col-xs-6">
                    <a target="_blank" href={config.google_play}>
                      <img
                        className="img-responsive img_app"
                        src="/images/ch-play.png"
                        alt=""
                      />
                    </a>{" "}
                  </div>{" "}
                  <div className="col-lg-12 col-md-12 col-sm-6 col-xs-6">
                    <a target="_blank" href={config.app_store}>
                      <img
                        className="img-responsive img_app"
                        src="/images/appstore.png"
                        alt=""
                      />
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-3 col-md-3">
                <h5> Kết nối với Việc Làm Nam Bộ </h5>{" "}
                <div className="row">
                  <FacebookProvider appId="996448710445193">
                    <Page
                      href="https://www.facebook.com/vieclamnambo.vn"
                      tabs="timeline"
                      height="200"
                    />
                  </FacebookProvider>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </footer>
        <section>
          <div className="container">
            <div className="row">
              <div className="copyright">
                <div className="row">
                  <div className="col-sm-6 col-lg-offset-3 text-center">
                    <a href="/">©2017 vieclamnambo.vn</a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    );
  }
}
