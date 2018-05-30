import { Component } from "react";
import { object } from "prop-types";
import JobSideBar from "../JobSideBar";
import JobDetail from "../JobDetail";

export default class JobMain extends Component {
  static contextTypes = {
    i18n: object
  };

  render() {
    const { l } = this.context.i18n;
    return (
      <div className="row">
        <div className="content-middle col-md-12">
          <JobDetail
            detail={this.props.detail}
            industrialSlug={this.props.industrialSlug}
            provinceSlug={this.props.provinceSlug}
            companySlug={this.props.companySlug}
          />
          <JobSideBar
            jobrequire={this.props.detail}
            industrialSlug={this.props.industrialSlug}
            provinceSlug={this.props.provinceSlug}
            companySlug={this.props.companySlug}
          />
        </div>
      </div>
    );
  }
}
