import React from "react";
import JobPostItem from "../JobPostItem";
import Image from "./../Image";
import { object } from "prop-types";
import { connect } from "react-redux";
import JobListLoading from "../JobListLoading";

export default class JobList extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    const type = this.props.type;
    if (this.props.joblist && this.props.joblist.length === 0) {
      return (
        <div className="job-list">
          <br />
          <h3>Không tìm thấy công việc phù hợp với tìm kiếm của bạn !</h3>
        </div>
      );
    }

    const jobdetail = this.props.joblist.map((jobdetail, index) => {
      if (jobdetail.slug !== null && jobdetail.slug !== "") {
        return <JobPostItem key={index} type={type} jobdetail={jobdetail} />;
      }
    });

    return <div className="job-list">{jobdetail}</div>;
  }
}
