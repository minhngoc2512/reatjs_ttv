import React from "react";
import { object } from "prop-types";
import { connect } from "react-redux";

export default class JobSort extends React.Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { store } = context.store;

    this.state = {
      sort: this.props.sort,
      salary: this.props.sort === "job_salary_id" ? "active" : "",
      created: this.props.sort === "created_at" ? "active" : "",
      number: ""
    };

    this.changeSort = this.changeSort.bind(this);
  }

  changeSort = data => {
    let salary = "";
    let created = "";
    let number = "";
    if (data === "job_salary_id") {
      salary = "active";
    } else if (data === "created_at") {
      created = "active";
    } else if (data === "number_of_recruitment") {
      number = "active";
    }

    this.setState({
      sort: data,
      salary: salary,
      created: created,
      number: number
    });

    this.props.updateSortCategory(data);
  };

  render() {
    const { l } = this.context.i18n;
    return (
      <div className="row">
        {/* <div className="col-md-12">
          <div className="row"> */}
        {/* <form className="form-inline"> */}
        <label className="number_job_conform col-lg-2 hidden-md hidden-xs hidden-sm">
          Sắp xếp:{" "}
        </label>
        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            {" "}
            <label
              onClick={this.changeSort.bind(this, "created_at")}
              className={
                this.state.created + " sort col-md-3 col-sm-4 col-xs-4"
              }
            >
              Việc mới nhất
            </label>
            <label
              onClick={this.changeSort.bind(this, "job_salary_id")}
              className={this.state.salary + " sort col-md-3 col-sm-4 col-xs-4"}
            >
              Lương cao nhất
            </label>
            <label
              onClick={this.changeSort.bind(this, "number_of_recruitment")}
              className={this.state.number + " sort col-md-3 col-sm-4 col-xs-4"}
            >
              Tuyển nhiều nhất
            </label>{" "}
          </div>
          {/* </div>
          </div> */}
          {/* <select
              className="chosen-select form-control"
              onChange={this.changeSort}
              value={this.state.sort}
            >
              <option value="job_salary_id">Mức lương cao nhất</option>
              <option value="created_at">Việc làm mới nhất</option>
              <option value="number_of_recruitment">
                Tuyển số lượng nhiều nhất
              </option>
            </select> */}
          {/* </form> */}
        </div>
      </div>
    );
  }
}
