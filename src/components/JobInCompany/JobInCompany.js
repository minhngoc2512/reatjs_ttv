import { Component } from "react";
import { object } from "prop-types";
import JobInCompanyItem from "../JobInCompanyItem";
import { Link } from "react-router";
import { connect } from "react-redux";
import JobListLoading from "../../components/JobListLoading";
import Paginate from "./../../components/Paginate";
import { push } from "react-router-redux";
import { loadJobInCompany } from "./../../redux/modules/jobInCompany/actions";

class JobInCompany extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  constructor(props, context) {
    super(props, context);
    this.updatePage = this.updatePage.bind(this);
  }
  updatePage(page) {
    this.context.store.dispatch(
      loadJobInCompany(this.props.companyId + "&page=" + page)
    );
  }
  render() {
    const { l } = this.context.i18n;
    if (
      this.props.statusLoad.isLoaded === true &&
      this.props.statusLoad.isInProgress === false
    ) {
      const JobListInCompany = this.props.JobInCompany.data.map(
        (JobItem, index) => {
          return (
            <JobInCompanyItem
              key={index}
              JobItem={JobItem}
              industrialSlug={this.props.industrialSlug}
              provinceSlug={this.props.provinceSlug}
              companySlug={this.props.companySlug}
            />
          );
        }
      );
      const slugCompany =
        typeof this.props.JobInCompany.data[0] !== "undefined"
          ? this.props.companySlug[this.props.JobInCompany.data[0].company_id]
          : "";
      const slugProvince =
        typeof this.props.JobInCompany.data[0] !== "undefined"
          ? this.props.provinceSlug[
              this.props.JobInCompany.data[0].job_contact.province_id
            ]
          : "";
      const linkJobCompany =
        "/" +
        slugProvince +
        "/" +
        (typeof slugCompany === "undefined" ? "" : slugCompany);
      return (
        <div className="job-company-4">
          <h3 className="title-company-4"> TUYỂN DỤNG CÙNG CÔNG TY</h3>
          {JobListInCompany}
          <div className="link-job-company">
            <Link to={linkJobCompany}> Xem thêm</Link>
          </div>
          <Paginate
            pagination={this.props.JobInCompany.pagination}
            updatePage={this.updatePage}
          />
        </div>
      );
    } else {
      return (
        <div className="job-company-4">
          <JobListLoading />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    JobInCompany: state.jobInCompany.data,
    statusLoad: state.dataView.JOBCOMPANY
  };
};
export default connect(mapStateToProps)(JobInCompany);
