import { Component } from "react";
import { object } from "prop-types";
import JobRequest from "../JobRequest";
import JobInCompany from "../JobInCompany";

export default class JobSideBar extends Component {
  static contextTypes = {
    i18n: object
  };

  render() {
    const { l } = this.context.i18n;

    const jobRequest =
      this.props.jobrequire.old_id !== 0 ? (
        <JobRequest jobrequire={this.props.jobrequire} />
      ) : (
        ""
      );
    return (
      <div className="col-md-4 as-23-34r5">
        {jobRequest}
        <JobInCompany
          companyId={this.props.jobrequire.company_id}
          industrialSlug={this.props.industrialSlug}
          provinceSlug={this.props.provinceSlug}
          companySlug={this.props.companySlug}
        />
      </div>
    );
  }
}
