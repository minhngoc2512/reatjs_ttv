import React, { Component } from "react";
import { object } from "prop-types";
export default class Sort extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  constructor(props) {
    super(props);
    this.state = {
      sort: this.props.sort,
      salary: "",
      created: "active",
      number: ""
    };
    this.updateStatusSort = this.updateStatusSort.bind(this);
    this.changeSort = this.changeSort.bind(this);
  }
  updateStatusSort() {
    let salary = "";
    let created = "";
    let number = "";
    if (this.props.sort === "-job_salary_id") {
      salary = "active";
    } else if (this.props.sort === "-created_at") {
      created = "active";
    } else if (this.props.sort === "-number_of_recruitment") {
      number = "active";
    } else {
      created = "active";
    }
    this.state = {
      sort: this.props.sort,
      salary: salary,
      created: created,
      number: number
    };
  }
  changeSort(data) {
    let salary = "";
    let created = "";
    let number = "";
    if (data === "-job_salary_id") {
      salary = "active";
    } else if (data === "-created_at") {
      created = "active";
    } else if (data === "-number_of_recruitment") {
      number = "active";
    }
    this.setState(
      {
        sort: data,
        salary: salary,
        created: created,
        number: number
      },
      () => {
        this.props.updateSort(data);
      }
    );
  }
  render() {
    this.updateStatusSort();
    return (
      <div className="row">
        <center>
          <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <label
                onClick={this.changeSort.bind(this, "-created_at")}
                className={
                  this.state.created +
                  " sort col-md-3 col-sm-3 col-xs-12 text-cp-center"
                }
              >
                Việc làm mới nhất
              </label>
              <label
                onClick={this.changeSort.bind(this, "-job_salary_id")}
                className={
                  this.state.salary +
                  " sort col-md-3 col-sm-3 col-xs-12 text-cp-center"
                }
              >
                Lương cao nhất
              </label>
              <label
                onClick={this.changeSort.bind(this, "-number_of_recruitment")}
                className={
                  this.state.number +
                  " sort col-md-3 col-sm-3 col-xs-12 text-cp-center"
                }
              >
                Tuyển nhiều nhất
              </label>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
