import { Component } from "react";
import { object } from "prop-types";
import JobListSimilarItem from "../JobListSimilarItem";
import { connect } from "react-redux";
import JobListLoading from "../../components/JobListLoading";
class JobSimilarIndustrialZone extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  constructor(props, context) {
    super(props, context);
  }
  render() {
    if (
      this.props.statusLoad.isLoaded === true &&
      this.props.statusLoad.isInProgress === false
    ) {
      const { l } = this.context.i18n;
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
              <h2 className="mo-ta-cv">VIỆC LÀM CÙNG {this.props.title}</h2>
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
    JobSimilar: state.jobSimilarIndustrialZone.data,
    statusLoad: state.dataView.JOBSIMILARINDUSTRIALZONE
  };
};
export default connect(mapStateToProps)(JobSimilarIndustrialZone);
