import React from "react";
import Image from "./../Image";
import { object } from "prop-types";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import JobListLoading from "../JobListLoading";
import { loadCategorySummary } from "./../../redux/modules/categorysummary/actions";

export class CategorySummary extends React.Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { store } = context.store;
  }

  render() {
    // const name =
    //   this.props.category_type === "province"
    //     ? "Tỉnh Thành: "
    //     : this.props.category_type === "industrial_zone"
    //       ? "Khu Công Nghiệp: "
    //       : "Ngành Nghề: ";

    const count_job =
      typeof this.props.pagination !== "undefined"
        ? this.props.pagination.total
        : 0;

    const arr_province = this.props.provinceId.toString().split(",");
    let str_province = "";

    const provinceNamePattern = {};
    this.props.taxonomy.data.data.forEach(item => {
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
    this.props.salary.forEach(item => {
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
    this.props.taxonomy.data.data.forEach(item => {
      if (item.taxonomy_type === "industrial_zone") {
        industrialNamePattern[item.taxonomy_id] = item.seo_title;
      }
    });

    arr_industrial.forEach((item, index) => {
      if (item !== "") {
        index === 0
          ? (str_industrial +=
              typeof industrialNamePattern[parseInt(item)] !== "undefined"
                ? industrialNamePattern[parseInt(item)]
                : "")
          : (str_industrial +=
              "," + typeof industrialNamePattern[parseInt(item)] !== "undefined"
                ? industrialNamePattern[parseInt(item)]
                : "");
      }
    });

    const arr_carrer = this.props.carrerId.toString().split(",");
    let str_carrer = "";

    const carrerNamePattern = {};
    this.props.taxonomy.data.data.forEach(item => {
      if (item.taxonomy_type === "carrer") {
        carrerNamePattern[item.taxonomy_id] = item.seo_title;
      }
    });

    arr_carrer.forEach((item, index) => {
      if (item !== "") {
        index === 0
          ? (str_carrer += carrerNamePattern[parseInt(item)])
          : (str_carrer += "," + carrerNamePattern[parseInt(item)]);
      }
    });

    const des =
      (str_carrer !== "" ? str_carrer + " " : "việc làm ") +
      (str_province !== "" || str_industrial !== "" ? "tại " : " ") +
      str_province +
      "" +
      (str_industrial !== "" ? ", " + str_industrial : "") +
      (str_salary !== "" ? " với mức lương " + str_salary : "");

    let title = "";
    let description = "";

    const categorySummary =
      typeof this.props.categorysummary !== "undefined"
        ? this.props.categorysummary.data
        : [];

    const summary = categorySummary.map((item, index) => {
      title =
        this.props.page !== 1
          ? item.seo_title + " - Trang " + this.props.page
          : item.seo_title;
      description = item.seo_description.substr(0, 300);
      return (
        <div key={index}>
          <h1 className="category_name">
            {/* {name} */}
            {item.seo_title}
            {/* <span className="name">{item.seo_title}</span> */}
          </h1>
          <h2
            className="category_description"
            dangerouslySetInnerHTML={{ __html: item.seo_description }}
          />
          <div className="row count-job-search">
            <div className="col-md-12">
              <span className="number_job_conform">
                Có: <b> {count_job} </b>
                {des} phù hợp .
              </span>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={this.props.url.pathname} />
          <meta property="og:type" content="article" />
        </Helmet>
        {summary}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // categorysummary: state.categorysummary.data.data,
    taxonomy: state.taxonomy,
    pagination: state.loadjobcategory.data.pagination,
    salary: state.job_salary.data.data,
    url: state.routing.locationBeforeTransitions
  };
};
export default connect(mapStateToProps)(CategorySummary);
