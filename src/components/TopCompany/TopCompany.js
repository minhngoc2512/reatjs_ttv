import React from "react";
import CompanyLogo from "../CompanyLogo";
import { object } from "prop-types";

export default class TopCompany extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <div className="col-md-12 col-sm-12">
        <div className="recent-alerts">
          <h4>Nhà Tuyển Dụng Hàng Đầu</h4>
          <div id="adc_TOP_COMPANIES" className="animated fadeIn">
            <CompanyLogo />
            <CompanyLogo />
            <CompanyLogo />
            <CompanyLogo />
            <CompanyLogo />
            <CompanyLogo />
            <CompanyLogo />
            <CompanyLogo />
          </div>
        </div>
      </div>
    );
  }
}
