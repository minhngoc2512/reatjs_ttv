import React from "react";
import { object } from "prop-types";
import config from "../../configs/appConfig";

export default class MobileAppLandingPage extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <div className="page-section cs-page-sec-567575">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cs-heading">
                <h2>Tải và Trải Nghiệm Ngay</h2>
                <div>
                  <h4>
                    Ứng dụng Việc Làm Nam Bộ đã có trên hai hệ điều hành Android
                    và IOS. Sản phẩm giúp kết nối giữa người lao động và nhà
                    tuyển dụng nhanh nhất và hiệu quả nhất
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <a target="_blank" href={config.google_play}>
                    <img className="img_app" src="/images/ch-play.png" alt="" />
                  </a>
                </div>
                <div className="col-md-6 col-sm-6">
                  <a target="_blank" href={config.app_store}>
                    <img
                      className="img_app"
                      src="/images/appstore.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md- col-sm-6">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <img
                    src="/images/mock-up.png"
                    alt=""
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
