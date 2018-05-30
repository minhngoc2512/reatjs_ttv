import { Component } from "react";
import { object } from "prop-types";
import TopCompany from "../TopCompany";
import CompanyAds01 from "../CompanyAds01";
export default class CompanySideBar extends Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <div className="col-md-3 col-sm-12">
        <TopCompany />
        <CompanyAds01 />
      </div>
    );
  }
}
