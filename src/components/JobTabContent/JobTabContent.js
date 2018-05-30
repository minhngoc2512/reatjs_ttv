import React from "react";
import { object } from "prop-types";
import JobList from "../JobList";
import JobListLoading from "../JobListLoading";
import { connect } from "react-redux";
import PaginateCategory from "../PaginateCategory";

export default class JobTabContent extends React.Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (
      this.props.dataView.isLoaded === true &&
      this.props.dataView.isFailed === false
    ) {
      return (
        <div>
          <JobList joblist={this.props.joblistfeature.data} />
          <PaginateCategory
            type={this.props.type}
            page={this.props.page}
            updatePage={this.props.updatePage}
            pagination={this.props.joblistfeature.pagination}
          />
        </div>
      );
    } else {
      return <JobListLoading />;
    }
  }
}
