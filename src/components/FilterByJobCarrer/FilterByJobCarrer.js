import React from "react";
import Image from "./../Image";
import { object } from "prop-types";
import { connect } from "react-redux";
import { loadFilterByJobCarrer } from "./../../redux/modules/filterbyjobcarrer/actions";

export class FilterByJobCarrer extends React.Component {
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

    if (this.props.carrerId !== "") {
      const carrerId = {};
      this.props.carrerId
        .toString()
        .split(",")
        .forEach(item => {
          carrerId[item] = parseInt(item);
        });
      this.state = {
        show: false,
        expand: true,
        carrer_id: carrerId
      };
    } else {
      this.state = {
        show: false,
        expand: true,
        carrer_id: {}
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
    const listId = this.state.carrer_id;
    if (!listId[data]) {
      listId[data] = data;
    } else {
      delete listId[data];
    }
    this.setState({
      carrer_id: listId
    });
    this.props.updateFilterCarrer(Object.values(listId).join(","));
  };

  render() {
    const filterByJobCarrer =
      typeof this.props.filterbyjobcarrer !== "undefined"
        ? this.props.filterbyjobcarrer
        : [];

    const carrer = filterByJobCarrer.map((carrer, index) => {
      //check xem da selected chua
      const listId = {};
      this.props.carrerId
        .toString()
        .split(",")
        .forEach(item => {
          listId[item] = parseInt(item);
        });
      const checked = listId[carrer.id] ? "checked" : "";
      // const checked = this.state.carrer_id[carrer.id] ? true : false;
      if (!this.state.show) {
        if (index < 5) {
          return (
            <li key={index}>
              <input
                type="checkbox"
                className={"carrer" + index}
                id={"carrer" + index}
                value={carrer.id}
                checked={checked}
                onClick={e => this.chooseClick(e, carrer.id)}
              />{" "}
              <label
                title={carrer.name}
                htmlFor={"carrer" + index}
                className="field_search"
              >
                {" "}
                {carrer.name}{" "}
              </label>{" "}
              <label className="count_number">
                {" "}
                {/* {"(" + carrer.job_avail_count + ")"} */}{" "}
              </label>{" "}
            </li>
          );
        }
      } else {
        return (
          <li key={index}>
            <input
              type="checkbox"
              className={"carrer" + index}
              id={"carrer" + index}
              value={carrer.id}
              checked={checked}
              onClick={e => this.chooseClick(e, carrer.id)}
            />{" "}
            <label
              title={carrer.name}
              htmlFor={"carrer" + index}
              className="field_search"
            >
              {" "}
              {carrer.name}{" "}
            </label>{" "}
            <label className="count_number">
              {" "}
              {/* {"(" + carrer.job_avail_count + ")"} */}{" "}
            </label>{" "}
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
          Lọc Theo Ngành Nghề{" "}
          <a
            href="javascript:void(0);"
            className="expand pull-right"
            onClick={this.expandFilter}
          >
            <i className={this.state.expand ? "fa fa-minus" : "fa fa-plus"} />{" "}
          </a>{" "}
        </div>{" "}
        <div className="filter-list" style={style}>
          <ul> {carrer} </ul>{" "}
          <a onClick={this.handleClick} href="javascript:void(0);">
            {" "}
            {this.state.show ? "Thu gọn" : "Mở Rộng"}{" "}
          </a>{" "}
        </div>{" "}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    filterbyjobcarrer: state.filterbyjobcarrer.data.data
  };
};
export default connect(mapStateToProps)(FilterByJobCarrer);
