import React, { Component } from "react";
import { object, shape, func } from "prop-types";
import CompanyDetail from "../../components/CompanyDetail";
import CompanyIndex from "../../components/CompanyIndex";
import JobSimilarCompany from "../../components/JobSimilarCompany";
import CompanyAds02 from "../../components/CompanyAds02";
import { asyncConnect } from "redux-connect";
import { loadInfomationCompany } from "../../redux/modules/infomationCompany/actions";
import { connect } from "react-redux";
import NotFound from "../NotFound";
import { loadJobSimilarCompany } from "./../../redux/modules/jobSimilarCompany/actions";
import { push } from "react-router-redux";
import JobListLoading from "../../components/JobListLoading";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import slug from "slug";
import { loadListJobCompany } from "../../redux/modules/company/actions";

class Company extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  constructor(props, context) {
    super(props, context);
    const { store } = context.store;
    const taxonomy = this.props.taxonomy.data;
    const companybId = this.props.companybId;
    const provinceId = this.props.provinceId;
    let typeSort = "";
    this.state = {
      company_id: companybId
    };
    this.context.store.dispatch(loadListJobCompany(this.state.company_id));
    this.context.store.dispatch(
      loadJobSimilarCompany(this.props.inforCompany.data[0].province_id)
    );
  }

  updateSearch = (key, province_id, salary_id) => {
    const jobSalary = {};
    this.props.salary.data.forEach(item => {
      jobSalary[item.id] = slug(item.name, {
        replacement: "-",
        lower: true
      });
    });

    const province = {};
    this.props.province.data.forEach(item => {
      province[item.id] = slug(item.name, {
        replacement: "-",
        lower: true
      });
    });

    const provinces = province_id !== "" ? province[province_id] : "";
    const salary = salary_id !== "" ? jobSalary[salary_id] : "";
    const key_word =
      key !== ""
        ? slug(key, {
            replacement: "-",
            lower: true
          })
        : "";

    const search =
      (key_word !== "" ? key_word + "+" : "") +
      (provinces !== "" ? "tai-" + provinces + "-" : "") +
      (salary !== "" ? "luong-" + salary + "-" : "");

    if (search !== "") {
      this.context.store.dispatch(
        push(
          "/" + "tim-kiem/viec-lam-" + search.substring(0, search.length - 1)
        )
      );
    } else {
      this.context.store.dispatch(push("/" + "tim-kiem/viec-lam"));
    }
  };

  render() {
    const { l } = this.context.i18n;
    const taxonomy = this.props.taxonomy.data;
    const industrialSlug = {};
    const store = this.context.store;
    // if (
    //   this.props.dataView.COMPANY.isLoaded === true &&
    //   this.props.dataView.COMPANY.isFailed === false
    // ) {
    taxonomy.forEach(item => {
      if (item.taxonomy_type === "industrial_zone") {
        industrialSlug[item.taxonomy_id] = item.slug;
      }
    });
    const provinceSlug = {};
    taxonomy.forEach(item => {
      if (item.taxonomy_type === "province" && item.slug.indexOf("-o-") >= 0) {
        provinceSlug[item.taxonomy_id] = item.slug;
      }
    });
    const companyListId = {};
    taxonomy.forEach(item => {
      if (item.taxonomy_type === "company") {
        companyListId[item.slug] = item.taxonomy_id;
      }
    });
    const companySlug = {};
    taxonomy.forEach(item => {
      if (item.taxonomy_type === "company") {
        companySlug[item.taxonomy_id] = item.slug;
      }
    });
    const companybId = companyListId[this.props.params.child];
    // console.log(this.props.listJobCompany);

    return (
      <main>
        <section className="category">
          <div className="container form-wrapper">
            <h2>Hàng Ngàn Công Việc Mới Đang Chờ Bạn</h2>
            <span>Đúng Người - Đúng Việc - Nhanh Chóng - Chính Xác</span>
          </div>
        </section>
        <SearchBarNotIndex updateSearch={this.updateSearch} />
        <div className="container-fluid page-background-1">
          <div className="container container-p-2">
            <CompanyDetail listJobCompany={this.props.listJobCompany} />
            <CompanyIndex
              provinceSlug={provinceSlug}
              industrialSlug={industrialSlug}
              path={this.props.url}
              store={store}
              listJobCompany={this.props.listJobCompany}
              taxonomy={this.props.taxonomy}
              companybId={companybId}
              company_id={this.state.company_id}
              pagination={this.props.listJobCompany.pagination}
            />
            <JobSimilarCompany
              industrialSlug={industrialSlug}
              provinceSlug={provinceSlug}
              companySlug={companySlug}
            />
            <CompanyAds02 />
          </div>
        </div>
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy.data,
    listJobCompany: state.listJobCompany.data,
    inforCompany: state.informationCompany.data,
    url: state.routing.locationBeforeTransitions,
    dataView: state.dataView,
    salary: state.job_salary.data,
    province: state.province.data
  };
};
export default connect(mapStateToProps)(Company);
