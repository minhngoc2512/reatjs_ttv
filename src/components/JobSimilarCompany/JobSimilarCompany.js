import { Component } from "react";
import { object } from "prop-types";
import JobListSimilarItem from "../JobListSimilarItem";
import { connect } from "react-redux";
import React from "react";
import JobListLoading from "../../components/JobListLoading";
import { loadJobSimilarCompany } from "./../../redux/modules/jobSimilarCompany/actions";
class JobSimilarCompany extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { l } = this.context.i18n;
    if (
      this.props.statusLoad.JOBSIMILARCOMPANY.isLoaded === true &&
      this.props.statusLoad.JOBSIMILARCOMPANY.isInProgress === false
    ) {
      const industrialSlug = this.props.industrialSlug;
      const provinceSlug = this.props.provinceSlug;
      const companySlug = this.props.companySlug;
      const JobPostSimilar = this.props.JobSimilar.data.map((item, index) => {
        return (
          <JobListSimilarItem
            key={index}
            JobItem={item}
            industrialSlug={industrialSlug}
            provinceSlug={provinceSlug}
            companySlug={companySlug}
          />
        );
      });
      return (
        <div className="row">
          <div className="content-footer col-md-12">
            <div className="full-width">
              <h2 className="mo-ta-cv">VIỆC LÀM LIÊN QUAN</h2>
            </div>
            {JobPostSimilar}
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="content-footer col-md-12">
            <JobListLoading />
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy,
    JobSimilar: state.jobSimilarCompany.data,
    statusLoad: state.dataView
  };
};
export default connect(mapStateToProps)(JobSimilarCompany);
