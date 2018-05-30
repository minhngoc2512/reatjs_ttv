import React from "react";
import Image from "./../Image";
import { object } from "prop-types";
import CategorySummary from "../CategorySummary";
import CategoryIndex from "../CategoryIndex";
import SearchSummary from "../../components/SearchSummary";

export default class CategoryMainSide extends React.Component {
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

  updateSortPage = (sort, page) => {
    this.setState({ sort: sort, page: page });
    this.props.updateSortPageCategory(sort, page);
  };

  render() {
    const summary =
      this.props.category_type === "search" ? (
        <SearchSummary
          carrerId={this.props.carrerId}
          provinceId={this.props.provinceId}
          salaryId={this.props.salaryId}
          keyWord={this.props.keyWord}
          page={this.props.page}
          industrialZoneId={this.props.industrialZoneId}
        />
      ) : (
        <CategorySummary
          category_type={this.props.category_type}
          params={this.props.params}
          page={this.props.page}
          categorysummary={this.props.categorysummary}
          provinceId={this.props.provinceId}
          industrialZoneId={this.props.industrialZoneId}
          carrerId={this.props.carrerId}
          salaryId={this.props.salaryId}
        />
      );

    return (
      <div className="col-md-9 col-sm-8">
        {summary}
        <CategoryIndex
          category_type={this.props.category_type}
          updateSortPage={this.updateSortPage}
          page={this.props.page}
          sort={this.props.sort}
        />
      </div>
    );
  }
}
