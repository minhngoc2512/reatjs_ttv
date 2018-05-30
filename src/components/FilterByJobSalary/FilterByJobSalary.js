import React from "react";
import Image from "./../Image";
import { object } from "prop-types";
import { connect } from "react-redux";

export class FilterByJobSalary extends React.Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { store } = context.store;

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

    this.expandFilter = this.expandFilter.bind(this);

    if (this.props.salaryId !== "") {
      const salaryId = {};
      this.props.salaryId
        .toString()
        .split(",")
        .forEach(item => {
          salaryId[item] = parseInt(item);
        });
      this.state = {
        show: false,
        expand: true,
        salary_id: salaryId
      };
    } else {
      this.state = {
        show: false,
        expand: true,
        salary_id: {}
      };
    }
  }

  handleClick() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  expandFilter() {
    this.setState(prevState => ({
      expand: !prevState.expand,
      show: false
    }));
  }

  chooseClick = (e, data) => {
    const listId = this.state.salary_id;
    if (!listId[data]) {
      listId[data] = data;
    } else {
      delete listId[data];
    }
    this.setState({ salary_id: listId });
    this.props.updateFilterSalary(Object.values(listId).join(","));
  };

  render() {
    const { l } = this.context.i18n;
    const salary = this.props.filterbyjobsalary.data.map((salary, index) => {
      //check xem da selected chua
      const listId = {};
      this.props.salaryId
        .toString()
        .split(",")
        .forEach(item => {
          listId[item] = parseInt(item);
        });
      const checked = listId[salary.id] ? "checked" : "";
      // const checked = this.state.salary_id[salary.id] ? true : false;
      if (!this.state.show) {
        if (index < 5) {
          return (
            <li key={index}>
              <input
                type="checkbox"
                className={"salary" + index}
                id={"salary" + index}
                value={salary.id}
                checked={checked}
                onClick={e => this.chooseClick(e, salary.id)}
              />
              <label
                title={salary.name}
                htmlFor={"salary" + index}
                className="field_search"
              >
                {salary.name}
              </label>
            </li>
          );
        }
      } else {
        return (
          <li key={index}>
            <input
              type="checkbox"
              className={"salary" + index}
              id={"salary" + index}
              value={salary.id}
              checked={checked}
              onClick={e => this.chooseClick(e, salary.id)}
            />
            <label
              title={salary.name}
              htmlFor={"salary" + index}
              className="field_search"
            >
              {salary.name}
            </label>
          </li>
        );
      }
    });

    let style = {};
    if (!this.state.expand) {
      style = {
        display: "none"
      };
    }

    return (
      <div className="filters-wrap">
        <div className="category-title">
          LỌC THEO MỨC LƯƠNG<a
            href="javascript:void(0);"
            className="expand pull-right"
            onClick={this.expandFilter}
          >
            <i className={this.state.expand ? "fa fa-minus" : "fa fa-plus"} />
          </a>
        </div>
        <div className="filter-list" style={style}>
          <ul>{salary}</ul>
          <a onClick={this.handleClick} href="javascript:void(0);">
            {this.state.show ? "Thu gọn" : "Mở Rộng"}
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filterbyjobsalary: state.job_salary.data
  };
};
export default connect(mapStateToProps)(FilterByJobSalary);

// export default connect(({ filterbyjobsalary }) => ({
//   filterbyjobsalary
// }))(FilterByJobSalary);
