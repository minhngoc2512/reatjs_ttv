import { Component } from "react";
import { object } from "prop-types";
import { push } from "react-router-redux";

export default class Paginate extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  constructor(props, context) {
    super(props, context);

    const { store } = context.store;

    this.state = {
      page: this.props.pagination.current_page
    };
  }

  changePage(e) {
    this.setState({
      page: e
    });
    this.props.updatePage(e);
  }

  render() {
    const page = this.state.page;
    //lay ra list pagination
    let offset = 2;
    const arrPagination = [];
    let typePage = "";
    if (this.props.typePage) {
      typePage = this.props.typePage;
      offset = 4;
    }
    if (
      parseInt(this.props.pagination.total) >
      parseInt(this.props.pagination.limit)
    ) {
      let from = this.props.pagination.current_page - offset;

      if (from < 1) {
        from = 1;
      }
      let to = from + offset * 2;

      if (
        to >=
        Math.ceil(this.props.pagination.total / this.props.pagination.limit)
      ) {
        to =
          Math.ceil(this.props.pagination.total / this.props.pagination.limit) +
          1;
      }

      for (from; from < to; from++) {
        arrPagination.push(from);
      }
    }

    const pagination = arrPagination.map((item, index) => {
      if (parseInt(item) === parseInt(page)) {
        return (
          <li key={index} className="active">
            <a
              className="page"
              href="javascript:void(0);"
              onClick={e => this.changePage(item)}
            >
              {item}
            </a>
          </li>
        );
      } else {
        return (
          <li key={index}>
            <a
              className="page"
              href="javascript:void(0);"
              onClick={e => this.changePage(item)}
            >
              {item}
            </a>
          </li>
        );
      }
    });

    if (
      parseInt(this.props.pagination.total) >
      parseInt(this.props.pagination.limit)
    ) {
      return (
        <ul
          className={
            `pagination ` + (typePage === "company" ? `` : `pagination-sm`)
          }
        >
          <li className={page == 1 ? "disabled" : "page-item"}>
            <a
              href="javascript:void(0);"
              className="page-link"
              onClick={e => this.changePage(1)}
            >
              <i className="fa fa-angle-double-left" />
            </a>
          </li>
          {pagination}
          <li
            className={
              page ==
              Math.ceil(
                this.props.pagination.total / this.props.pagination.limit
              )
                ? "disabled"
                : "page-item"
            }
          >
            <a
              href="javascript:void(0);"
              className="page-link"
              onClick={e =>
                this.changePage(
                  Math.ceil(
                    this.props.pagination.total / this.props.pagination.limit
                  )
                )
              }
            >
              <i className="fa fa-angle-double-right" />
            </a>
          </li>
        </ul>
      );
    } else {
      return <ul className="pagination" />;
    }
  }
}
