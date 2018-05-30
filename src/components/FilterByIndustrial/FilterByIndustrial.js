import React from "react";
import Image from "./../Image";
import { object } from "prop-types";
import { connect } from "react-redux";
import { loadFilterByIndustrial } from "./../../redux/modules/filterbyindustrial/actions";
import { Link } from "react-router";

export class FilterByIndustrial extends React.Component {
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

    if (this.props.industrialZoneId !== "") {
      const industrialZoneId = {};
      this.props.industrialZoneId
        .toString()
        .split(",")
        .forEach(item => {
          industrialZoneId[item] = parseInt(item);
        });
      this.state = {
        show: false,
        expand: true,
        industrial_id: industrialZoneId
      };
    } else {
      this.state = {
        show: false,
        expand: true,
        industrial_id: {}
      };
    }

    const provinceSlugPattern = {};
    this.props.taxonomy.data.forEach(item => {
      if (item.taxonomy_type === "province") {
        provinceSlugPattern[item.slug] = item.taxonomy_id;
      }
    });
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
    const listId = this.state.industrial_id;
    if (!listId[data]) {
      listId[data] = data;
    } else {
      delete listId[data];
    }
    this.setState({ industrial_id: listId });
    this.props.updateFilterIndustrial(Object.values(listId).join(","));
  };

  render() {
    const industrialSlugPattern = {};
    this.props.taxonomy.data.forEach(item => {
      if (item.taxonomy_type === "industrial_zone") {
        industrialSlugPattern[item.taxonomy_id] = item.slug;
      }
    });

    const filterByIndustrial =
      typeof this.props.filterbyindustrial !== "undefined"
        ? this.props.filterbyindustrial.data
        : [];

    const sortIndustrial = filterByIndustrial.sort(function(a, b) {
      return parseFloat(b.job_avail_count) - parseFloat(a.job_avail_count);
    });

    const industrial = sortIndustrial.map((indus, index) => {
      // if (indus.name.indexOf("Ngoài KCN") === -1) {
      //check xem da selected chua
      const listId = {};
      this.props.industrialZoneId
        .toString()
        .split(",")
        .forEach(item => {
          listId[item] = parseInt(item);
        });
      const checked = listId[indus.id] ? "checked" : "";
      // const checked = this.state.industrial_id[indus.id] ? true : false;
      if (!this.state.show) {
        if (index < 5) {
          return (
            <li key={index}>
              <input
                type="checkbox"
                className={"indus" + index}
                id={"indus" + index}
                value={indus.id}
                checked={checked}
                onClick={e => this.chooseClick(e, indus.id)}
              />
              <label
                title={indus.name}
                htmlFor={"indus" + index}
                className="field_search"
              >
                {indus.name
                  .replace("Khu công nghiệp", "")
                  .replace("Khu Công Nghiệp", "")
                  .replace("Khu Chế Xuất", "")}
              </label>
              <label className="count_number" />
            </li>
          );
        }
      } else {
        return (
          <li key={index}>
            <input
              type="checkbox"
              className={"indus" + index}
              id={"indus" + index}
              value={indus.id}
              checked={checked}
              onClick={e => this.chooseClick(e, indus.id)}
            />
            <label
              title={indus.name}
              htmlFor={"indus" + index}
              className="field_search"
            >
              {indus.name
                .replace("Khu công nghiệp", "")
                .replace("Khu Công Nghiệp", "")
                .replace("Khu Chế Xuất", "")}
            </label>
            <label className="count_number" />
          </li>
        );
      }
      // }
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
          KHU CÔNG NGHIỆP
          <a
            onClick={this.expandFilter}
            href="javascript:void(0);"
            className="expand pull-right"
          >
            <i className={this.state.expand ? "fa fa-minus" : "fa fa-plus"} />
          </a>
        </div>
        <div className="filter-list" style={style}>
          <ul>{industrial}</ul>
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
    filterbyindustrial: state.filterbyindustrial.data,
    taxonomy: state.taxonomy.data
  };
};
export default connect(mapStateToProps)(FilterByIndustrial);
