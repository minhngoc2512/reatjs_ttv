import React from "react";
import Image from "./../Image";
import { object } from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Link } from "react-router";

export class JobPostItem extends React.Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { store } = context.store;
  }
  render() {
    const { l } = this.context.i18n;
    const job_title = this.props.jobdetail.job_title;
    const number_of_recruitment =
      this.props.jobdetail.number_of_recruitment == 0
        ? "Tuyển đến khi đủ số lượng"
        : "Số lượng: " + this.props.jobdetail.number_of_recruitment;
    const job_salary = this.props.jobdetail.job_salary.name;
    const location =
      this.props.type == "KCN"
        ? this.props.jobdetail.job_contact.industrial_zone !== null
          ? this.props.jobdetail.job_contact.industrial_zone.name
          : this.props.jobdetail.job_contact.province.name
        : this.props.jobdetail.job_contact.province.name;
    const class_name_left =
      this.props.type == "KCN"
        ? "col-lg-6 col-md-6 col-sm-6"
        : "col-lg-5 col-md-5 col-sm-6";
    const class_name_right =
      this.props.type == "KCN"
        ? "col-lg-6 col-md-6 col-sm-6"
        : "col-lg-7 col-md-7 col-sm-6";

    const ended_at =
      this.props.jobdetail.ended_at == "0001-01-01T00:00:00Z" ? (
        "Đến khi đủ số lượng"
      ) : (
        <Moment format="DD/MM/YYYY">{this.props.jobdetail.ended_at}</Moment>
      );

    let arrLogo = [
      require("../../../static/images/1.png"),
      require("../../../static/images/2.png"),
      require("../../../static/images/3.png"),
      require("../../../static/images/4.png"),
      require("../../../static/images/5.png"),
      require("../../../static/images/6.png")
    ];

    const logo =
      this.props.jobdetail.company.logo == "" || null
        ? arrLogo[Math.floor(Math.random() * arrLogo.length)]
        : this.props.jobdetail.company.logo;

    const company_name = this.props.jobdetail.company.name;
    const province_id = this.props.jobdetail.job_contact.province_id;
    const industrial_zone_id = this.props.jobdetail.job_contact
      .industrial_zone_id;
    // const company_id = this.props.jobdetail.job_contact.industrial_zone.id;
    const provinceSlugPattern = {};
    this.props.taxonomy.data.forEach(item => {
      if (item.taxonomy_type === "province" && item.slug.indexOf("-o-") >= 0) {
        provinceSlugPattern[item.taxonomy_id] = item.slug;
      }
    });
    let province_slug = provinceSlugPattern[province_id];

    const industrialSlugPattern = {};
    this.props.taxonomy.data.forEach(item => {
      if (item.taxonomy_type === "industrial_zone") {
        industrialSlugPattern[item.taxonomy_id] = item.slug;
      }
    });

    const location_url =
      this.props.type == "KCN"
        ? "/" +
          province_slug +
          (typeof industrialSlugPattern[industrial_zone_id] !== "undefined"
            ? "/" + industrialSlugPattern[industrial_zone_id]
            : "")
        : "/" + province_slug;

    let slug_job = "";

    if (
      industrial_zone_id === 0 ||
      industrial_zone_id === null ||
      this.props.jobdetail.job_contact.industrial_zone === null
    ) {
      slug_job =
        "/" + province_slug + "/" + this.props.jobdetail.slug + ".html";
    } else {
      //check xem kcn do co phai la ngoai kcn
      if (
        this.props.jobdetail.job_contact.industrial_zone.name.includes(
          "Ngoài KCN"
        )
      ) {
        slug_job =
          "/" + province_slug + "/" + this.props.jobdetail.slug + ".html";
      } else {
        slug_job =
          "/" +
          province_slug +
          "/" +
          industrialSlugPattern[industrial_zone_id] +
          "/" +
          this.props.jobdetail.slug +
          ".html";
      }
    }

    return (
      <div className="list-view">
        <Link
          title={company_name}
          className="logo"
          title={job_title}
          to={slug_job}
        >
          <img src={logo} alt={company_name} />
        </Link>
        {/* <a title={company_name} className="logo" href={slug_job}>
          <img src={logo} alt={company_name} />
        </a> */}
        <div className="list-info job-list-info">
          <h3 className="item-title">
            <Link title={job_title} to={slug_job}>
              {job_title}
            </Link>
          </h3>
          <div className="job-icons">
            <div className="row">
              <div className={class_name_left}>
                <span className="number_job">{number_of_recruitment}</span>
              </div>
              <div className={class_name_right}>
                <span className="salary_job">
                  Mức lương: <a href="#"> {job_salary}</a>
                </span>
              </div>
            </div>
            <div className="row">
              <div className={class_name_left}>
                <span className="location_job">
                  Địa chỉ:{" "}
                  <Link title={location} to={location_url}>
                    {location}
                  </Link>
                  {/* <a href={location_url}> {location}</a> */}
                </span>
              </div>
              <div className={class_name_right}>
                <span className="date_job">Hạn nộp hồ sơ: {ended_at}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy.data
  };
};
export default connect(mapStateToProps)(JobPostItem);
