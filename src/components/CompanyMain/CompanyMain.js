import { Component } from "react";
import { object } from "prop-types";
import React from "react";
import Sort from "../Sort";
import CompanyJobList from "../CompanyJobList";
import Paginate from "../Paginate";
import { connect } from "react-redux";
import JobListLoading from "../../components/JobListLoading";

class CompanyMain extends Component {
  static contextTypes = {
    i18n: object
  };

  render() {
    const { l } = this.context.i18n;
    if (
      this.props.dataView.COMPANY.isLoaded === true &&
      this.props.dataView.COMPANY.isFailed === false
    ) {
      const countJob = this.props.listJobCompany.data.length;
      const taxonomy = this.props.taxonomy;
      const listJob =
        typeof this.props.listJobCompany.data[0] !== "undefined"
          ? this.props.listJobCompany.data.map((item, index) => {
              return (
                <CompanyJobList
                  key={index}
                  jobPost={item}
                  taxonomy={taxonomy}
                  industrialSlug={this.props.industrialSlug}
                  provinceSlug={this.props.provinceSlug}
                />
              );
            })
          : "";
      // console.log(this.props.pagination);
      return (
        <div className="col-md-9 col-sm-12 padding-bottom-content">
          <Sort
            path={this.props.path}
            updateSort={this.props.updateSort}
            store={this.props.store}
            sort={this.props.sort}
            companybId={this.props.companybId}
          />
          <div className="job-list">{listJob}</div>
          <Paginate
            updatePage={this.props.updatePage}
            pagination={this.props.pagination}
            typePage={"company"}
          />
        </div>
      );
    } else if (this.props.dataView.COMPANY.isInProgress === true) {
      return (
        <div>
          <div className="col-md-9 col-sm-12 padding-bottom-content">
            {/* <JobListLoading /> */}
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy,
    listJobCompany: state.listJobCompany.data,
    dataView: state.dataView,
    informationCompany: state.informationCompany.data
  };
};
export default connect(mapStateToProps)(CompanyMain);
