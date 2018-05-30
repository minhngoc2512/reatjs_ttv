import React from "react";
import Image from "./../Image";
import { object } from "prop-types";
import { connect } from "react-redux";
import { loadFilterByProvince } from "./../../redux/modules/filterbyprovince/actions";
import { Link } from "react-router";

export class FilterByProvince extends React.Component {
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

    if (this.props.provinceId !== "") {
      const provinceId = {};
      this.props.provinceId
        .toString()
        .split(",")
        .forEach(item => {
          provinceId[item] = parseInt(item);
        });
      this.state = {
        show: false,
        expand: true,
        province_id: provinceId
      };
    } else {
      this.state = {
        show: false,
        expand: true,
        province_id: {}
      };
    }

    this.context.store.dispatch(loadFilterByProvince());
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
    console.log(data);
    const listId = this.state.province_id;
    if (!listId[data]) {
      listId[data] = data;
    } else {
      delete listId[data];
    }
    this.setState({ province_id: listId });
    this.props.updateFilterProvince(Object.values(listId).join(","));
  };

  render() {
    const filterbyprovince =
      typeof this.props.filterbyprovince !== "undefined"
        ? this.props.filterbyprovince
        : [];

    const provinceSlugPattern = {};
    this.props.taxonomy.data.forEach(item => {
      if (item.taxonomy_type === "province") {
        provinceSlugPattern[item.taxonomy_id] = item.slug;
      }
    });

    const province = filterbyprovince.map((province, index) => {
      //check xem da selected chua
      const listId = {};
      this.props.provinceId
        .toString()
        .split(",")
        .forEach(item => {
          listId[item] = parseInt(item);
        });
      const checked = listId[province.id] ? "checked" : "";
      // const checked = this.state.province_id[province.id] ? true : false;

      if (!this.state.show) {
        if (index < 5) {
          return (
            <li key={index}>
              <input
                type="checkbox"
                className={"province" + index}
                id={"province" + index}
                value={province.id}
                checked={checked}
                onClick={e => this.chooseClick(e, province.id)}
              />
              <label htmlFor={"province" + index} className="field_search">
                {province.name}
              </label>
            </li>
          );
        }
      } else {
        return (
          <li key={index}>
            <input
              type="checkbox"
              className={"province" + index}
              id={"province" + index}
              value={province.id}
              checked={checked}
              onClick={e => this.chooseClick(e, province.id)}
            />
            <label htmlFor={"province" + index} className="field_search">
              {province.name}
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
          Các Tỉnh Thành<a
            href="javascript:void(0);"
            className="expand pull-right"
            onClick={this.expandFilter}
          >
            <i className={this.state.expand ? "fa fa-minus" : "fa fa-plus"} />
          </a>
        </div>
        <div className="filter-list" style={style}>
          <ul>{province}</ul>
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
    filterbyprovince: state.filterbyprovince.data.data,
    taxonomy: state.taxonomy.data
  };
};
export default connect(mapStateToProps)(FilterByProvince);
