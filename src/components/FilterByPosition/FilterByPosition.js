import React from "react";
import Image from "./../Image";
import { object } from "prop-types";
import { connect } from "react-redux";
import { loadFilterByPosition } from "./../../redux/modules/filterbyposition/actions";

export class FilterByPosition extends React.Component {
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

    if (this.props.positionId !== "") {
      const positionId = {};
      this.props.positionId
        .toString()
        .split(",")
        .forEach(item => {
          positionId[item] = parseInt(item);
        });
      this.state = {
        show: false,
        expand: true,
        position_id: positionId
      };
    } else {
      this.state = {
        show: false,
        expand: true,
        position_id: {}
      };
    }

    // this.context.store.dispatch(loadFilterByPosition());
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
    const listId = this.state.position_id;
    if (!listId[data]) {
      listId[data] = data;
    } else {
      delete listId[data];
    }
    this.setState({ position_id: listId });
    this.props.updateFilterPosisition(Object.values(listId).join(","));
  };

  render() {
    const filterByPosition =
      typeof this.props.filterbyposition !== "undefined"
        ? this.props.filterbyposition
        : [];

    const position = filterByPosition.map((position, index) => {
      //check xem da selected chua
      const listId = {};
      this.props.positionId
        .toString()
        .split(",")
        .forEach(item => {
          listId[item] = parseInt(item);
        });
      const checked = listId[position.id] ? "checked" : "";
      // const checked = this.state.position_id[position.id] ? true : false;
      if (!this.state.show) {
        if (index < 5) {
          return (
            <li key={index}>
              <input
                type="checkbox"
                className={"position" + index}
                id={"position" + index}
                value={position.id}
                checked={checked}
                onClick={e => this.chooseClick(e, position.id)}
              />
              <label
                title={position.name}
                htmlFor={"position" + index}
                className="field_search"
              >
                {position.name}
              </label>
            </li>
          );
        }
      } else {
        return (
          <li key={index}>
            <input
              type="checkbox"
              className={"position" + index}
              id={"position" + index}
              value={position.id}
              checked={checked}
              onClick={e => this.chooseClick(e, position.id)}
            />
            <label
              title={position.name}
              htmlFor={"position" + index}
              className="field_search"
            >
              {position.name}
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
          LỌC THEO VỊ TRÍ<a
            href="javascript:void(0);"
            className="expand pull-right"
            onClick={this.expandFilter}
          >
            <i className={this.state.expand ? "fa fa-minus" : "fa fa-plus"} />
          </a>
        </div>
        <div className="filter-list" style={style}>
          <ul>{position}</ul>
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
    filterbyposition: state.filterbyposition.data.data
  };
};
export default connect(mapStateToProps)(FilterByPosition);
