import { Component } from "react";
import { object } from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";

export class SearchSummary extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  render() {
    const arr_province = this.props.provinceId.toString().split(",");
    let str_province = "";

    const provinceNamePattern = {};
    this.props.taxonomy.data.forEach(item => {
      if (item.taxonomy_type === "province") {
        provinceNamePattern[item.taxonomy_id] = item.seo_title.replace(
          "Việc làm",
          ""
        );
      }
    });

    arr_province.forEach((item, index) => {
      if (item !== "") {
        index === 0
          ? (str_province += provinceNamePattern[parseInt(item)])
          : (str_province += "," + provinceNamePattern[parseInt(item)]);
      }
    });

    const arr_salary = this.props.salaryId.toString().split(",");
    let str_salary = "";
    const jobSalary = {};
    this.props.job_salary.data.forEach(item => {
      jobSalary[item.id] = item.name;
    });

    arr_salary.forEach((item, index) => {
      if (item !== "") {
        index === 0
          ? (str_salary += jobSalary[parseInt(item)])
          : (str_salary += "," + jobSalary[parseInt(item)]);
      }
    });

    const arr_industrial = this.props.industrialZoneId.toString().split(",");
    let str_industrial = "";

    const industrialNamePattern = {};
    this.props.taxonomy.data.forEach(item => {
      if (item.taxonomy_type === "industrial_zone") {
        industrialNamePattern[item.taxonomy_id] = item.seo_title;
      }
    });

    arr_industrial.forEach((item, index) => {
      if (item !== "") {
        index === 0
          ? (str_industrial += industrialNamePattern[parseInt(item)])
          : (str_industrial += "," + industrialNamePattern[parseInt(item)]);
      }
    });

    const arr_carrer = this.props.carrerId.toString().split(",");
    let str_carrer = "";

    const carrerNamePattern = {};
    this.props.taxonomy.data.forEach(item => {
      if (item.taxonomy_type === "carrer") {
        carrerNamePattern[item.taxonomy_id] = item.seo_title;
      }
    });

    arr_carrer.forEach((item, index) => {
      if (item !== "") {
        index === 0
          ? (str_carrer += carrerNamePattern[parseInt(item)].replace(
              "Việc làm",
              ""
            ))
          : (str_carrer +=
              "," + carrerNamePattern[parseInt(item)].replace("Việc làm", ""));
      }
    });

    const count_job =
      typeof this.props.pagination !== "undefined"
        ? this.props.pagination.total
        : 0;

    const query = this.props.url.pathname;
    let title = "";
    if (query === "/tim-kiem/viec-lam-moi-nhat") {
      title = " Việc làm mới nhất";
    } else if (query === "/tim-kiem/viec-lam-luong-cao") {
      title = " Việc làm lương cao";
    } else {
      title =
        (this.props.keyWord !== "" ||
        str_province !== "" ||
        str_salary !== "" ||
        str_carrer !== ""
          ? "Việc làm "
          : " Tất cả việc làm") +
        (this.props.keyWord !== "" ? this.props.keyWord + " " : " ") +
        (str_carrer !== "" ? str_carrer + " " : " ") +
        (str_province !== "" ? "tại " + str_province : str_province) +
        (str_industrial !== "" ? ", " + str_industrial + " " : str_industrial) +
        (str_salary !== "" ? " với mức lương " + str_salary : str_salary);
    }

    return (
      <div>
        <Helmet>
          <title>
            {title +
              (this.props.page !== 1 ? " - Trang " + this.props.page : "")}
          </title>
          <meta name="description" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={title} />
          <meta property="og:url" content={this.props.url.pathname} />
          <meta property="og:type" content="article" />
        </Helmet>
        <h1 className="category_name">
          {/* Kết quả tìm kiếm: */}
          {title}
          {/* <span className="name">{title}</span> */}
        </h1>
        <div className="count-job-search">
          <div>
            <span className="number_job_conform">
              Có: <b>{count_job}</b> công việc phù hợp
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy.data,
    pagination: state.loadjobcategory.data.pagination,
    job_salary: state.job_salary.data,
    url: state.routing.locationBeforeTransitions
  };
};
export default connect(mapStateToProps)(SearchSummary);
