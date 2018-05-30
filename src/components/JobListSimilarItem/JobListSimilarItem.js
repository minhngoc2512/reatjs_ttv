import { Component } from "react";
import { object } from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router";
export default class JobListSimilarItem extends Component {
  static contextTypes = {
    i18n: object
  };

  render() {
    const { l } = this.context.i18n;
    const JobItem = this.props.JobItem;
    const endedAt = endDate => {
      return endDate == "0001-01-01T00:00:00Z" ? (
        "Đến khi đủ số lượng"
      ) : (
        <Moment format="DD/MM/YYYY">{endDate}</Moment>
      );
    };
    const logoJob = logo => {
      if (logo === "") {
        let listLogo = [
          require("../../../static/images/1.png"),
          require("../../../static/images/2.png"),
          require("../../../static/images/3.png"),
          require("../../../static/images/4.png"),
          require("../../../static/images/5.png"),
          require("../../../static/images/6.png")
        ];
        let logoRandom = listLogo[Math.floor(Math.random() * listLogo.length)];
        return logoRandom;
      }
      return logo;
    };
    const numberOfRecruitment = conutJob => {
      return conutJob == 0 ? "Tuyển đến khi đủ" : "Số lượng: " + conutJob;
    };
    const industrialSlug = this.props.industrialSlug;
    const provinceSlug = this.props.provinceSlug;
    const companySlug = this.props.companySlug;
    if (JobItem.job_contact === null) {
      return <div />;
    }
    const province_id = JobItem.job_contact.province_id;
    let province_slug = provinceSlug[province_id];
    let slug_job = "";
    const company_slug =
      companySlug[JobItem.company_id] !== "undefined"
        ? companySlug[JobItem.company_id] + "/"
        : "";
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
      <div className="col-md-6">
        <div className="job_relation">
          <div className="job-list">
            <div className="list-view padding-item-s">
              <Link title={JobItem.job_title} className="logo" to={slug_job}>
                <img
                  className="img-c-similar"
                  src={logoJob(JobItem.company.logo)}
                  alt={JobItem.job_title}
                />
              </Link>
              <div className="list-info job-list-info">
                <h3 className="item-title">
                  <Link title={JobItem.job_title} to={slug_job}>
                    {JobItem.job_title}
                  </Link>
                </h3>
                {/* <div className="job-icons">
                  <div className="row none-display-12">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <span className="number_job">
                        {numberOfRecruitment(JobItem.number_of_recruitment)}
                      </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <span className="salary_job">
                        Mức lương:
                        <Link
                          title={JobItem.job_salary.name}
                          to={"/" + province_slug}
                        >
                          {JobItem.job_salary.name}
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="row none-display-12">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <span className="location_job">
                        <Link
                          title={JobItem.job_contact.province.name}
                          to={"/" + province_slug}
                        >
                          {JobItem.job_contact.province.name}
                        </Link>
                      </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <span className="date_job">
                        {endedAt(JobItem.ended_at)}
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
