import { Component } from "react";
import { object } from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router";

export default class JobSummary extends Component {
  static contextTypes = {
    i18n: object
  };

  render() {
    const summary = this.props.summary;
    const { l } = this.context.i18n;
    const logoSummary = logo => {
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

    const dateCreatedAt = date => {
      return <Moment format="DD/MM/YYYY">{date}</Moment>;
    };
    const endedAt = endDate => {
      return endDate == "0001-01-01T00:00:00Z" ? (
        "Đến khi đủ số lượng"
      ) : (
        <Moment format="DD/MM/YYYY">{endDate}</Moment>
      );
    };
    const industrialSlug = this.props.industrialSlug;
    const provinceSlug = this.props.provinceSlug;
    const companySlug = this.props.companySlug;
    const province_id = summary.job_contact.province_id;
    let province_slug = provinceSlug[province_id];
    let slug_company = "";
    const company_slug =
      companySlug[summary.company_id] !== "undefined"
        ? companySlug[summary.company_id]
        : "";
    const industrial_zone_id = summary.job_contact.industrial_zone_id;
    if (industrial_zone_id !== 0 || industrial_zone_id !== null) {
      slug_company =
        "/" +
        province_slug +
        "/" +
        (typeof industrialSlug[industrial_zone_id] !== "undefined"
          ? industrialSlug[industrial_zone_id]
          : "");
    } else {
      slug_company = "/" + province_slug + "/" + company_slug;
    }
    return (
      <div className="row ">
        <div className="content-topa col-md-12">
          <div className="col-md-2">
            <center>
              {/* <Link title={summary.company.name} to={slug_company}> */}
              <img
                src={logoSummary(summary.company.logo)}
                className="img-content-top"
              />
              {/* </Link> */}
            </center>
          </div>
          <div className="col-md-10">
            <div className="text-content-top-job text-center-content">
              {/* <a title="" href="#"> */}
              <h1 className="title-content-top"> {summary.job_title}</h1>
              {/* </a> */}
              <div className="title-job-s">
                Địa điểm: {summary.job_contact.contact_address}
              </div>
              {/* <span className="content-saraly">
                Mức lương: {summary.job_salary.name}
              </span> */}
              {/* <div className="job-created-at">
                Ngày đăng tuyển: {dateCreatedAt(summary.created_at)}{" "}
              </div> */}
            </div>
          </div>
          {/* <div className="col-md-3">
            <div className="content-button">
              <input
                className="form-control btn-detail-s"
                value="ỨNG TUYỂN NGAY"
                type="button"
              />
              <p className="content-date">
                Hạn nộp: {endedAt(summary.ended_at)}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
