import { Component } from "react";
import { object } from "prop-types";
export default class JobApllyItem extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="col-md-12 col-xs-12 u-job-item">
        <div className="col-md-9">
          <div className="job_relation">
            <div className="job-list">
              <div className="list-view u-job-list-apply">
                <a title="" className="logo" href="company.html">
                  <img src="img/job-list-logo-01.jpg" alt="Company Logo 01" />
                </a>
                <div className="list-info job-list-info">
                  <h3 className="item-title">
                    <a title="" href="detail.html">
                      Công ty Cổ phần Eurowindow tuyển Nhân viên kế hoạch
                    </a>
                  </h3>
                  <div className="job-icons">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <span className="number_job">Số lượng: 01</span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <span className="salary_job">
                          Mức lương:
                          <a href="#">10 TRIỆU - 15 TRIỆU</a>
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <span className="location_job">
                          Địa chỉ:
                          <a href="#">Đồng Nai</a>
                        </span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <span className="date_job">
                          Hạn Nộp Hồ Sơ: 10/11/2017
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <center>
            <button className="btn btn-warning u-btn-list-job">
              BỎ ỨNG TUYỂN
            </button>
          </center>
        </div>
      </div>
    );
  }
}
