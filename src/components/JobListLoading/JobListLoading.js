import React from "react";

export default class JobList extends React.Component {
  render() {
    return (
      <div className="loading-wrapper">
        <div className="box-loading">
          <div className="box-thumbnail" />

          <div className="box-line-lgx" />
          <div className="box-line-sm" />
          <div className="box-line-sm" />
        </div>
      </div>
    );
  }
}
