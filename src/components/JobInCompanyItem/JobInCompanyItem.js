import { Component } from "react";
import { object } from "prop-types";
import { Link } from "react-router";

export default class JobInCompanyItem extends Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    const JobItem = this.props.JobItem;
    if (JobItem.job_contact === null) {
      return <div />;
    }
    const industrialSlug = this.props.industrialSlug;
    const provinceSlug = this.props.provinceSlug;
    const province_id = JobItem.job_contact.province_id;
    const companySlug = this.props.companySlug;
    const company_slug =
      companySlug[JobItem.company_id] !== "undefined"
        ? companySlug[JobItem.company_id] + "/"
        : "";
    let province_slug = provinceSlug[province_id];
    let slug_job = "";
    const industrial_zone_id = JobItem.job_contact.industrial_zone_id;
    if (industrial_zone_id !== 0 || industrial_zone_id !== null) {
      slug_job =
        "/" +
        province_slug +
        "/" +
        (typeof industrialSlug[industrial_zone_id] === "undefined"
          ? ""
          : industrialSlug[industrial_zone_id] + "/") +
        JobItem.slug +
        ".html";
    } else {
      slug_job =
        "/" + province_slug + "/" + company_slug + JobItem.slug + ".html";
    }
    return (
      <div className="jod-company-conent">
        <h3>
          <Link title={JobItem.job_title} to={slug_job}>
            {JobItem.job_title}
          </Link>
        </h3>
      </div>
    );
  }
}
