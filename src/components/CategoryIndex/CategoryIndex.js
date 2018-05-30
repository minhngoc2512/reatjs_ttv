import React from "react";
import Image from "./../Image";
import { object } from "prop-types";
import JobList from "../JobList";
import JobSort from "../JobSort";
import PaginateCategory from "../PaginateCategory";
import JobListLoading from "../JobListLoading";
import { connect } from "react-redux";

export class CategoryIndex extends React.Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { store } = context.store;

    this.state = {
      sort: this.props.sort,
      page: this.props.page
    };
  }

  updateSortCategory = sort => {
    this.setState({
      sort: sort
    });

    this.props.updateSortPage(sort, this.state.page);
  };

  updatePageCategory = page => {
    this.setState({
      page: page
    });
    this.props.updateSortPage(this.state.sort, page);
  };

  render() {
    const { l } = this.context.i18n;
    const type =
      this.props.category_type === "industrial_zone" || "carrer" ? "KCN" : "";

    // if (
    //   this.props.dataView.LOADJOBCATEGORY.isLoaded === true &&
    //   this.props.dataView.LOADJOBCATEGORY.isFailed === false
    // ) {
    return (
      <div>
        <JobSort
          sort={this.props.sort}
          updateSortCategory={this.updateSortCategory}
        />
        <JobList joblist={this.props.loadjobcategory.data} type={type} />
        <PaginateCategory
          page={this.props.page}
          updatePageCategory={this.updatePageCategory}
          pagination={this.props.loadjobcategory.pagination}
        />
      </div>
    );
    // } else {
    //   return (
    //     <div>
    //       <JobSort
    //         sort={this.props.sort}
    //         updateSortCategory={this.updateSortCategory}
    //       />
    //       <JobListLoading />
    //     </div>
    //   );
    // }
  }
}

const mapStateToProps = state => {
  return {
    dataView: state.dataView,
    loadjobcategory: state.loadjobcategory.data
  };
};
export default connect(mapStateToProps)(CategoryIndex);
