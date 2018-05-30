import React from "react";
import Image from "./../Image";
import { object } from "prop-types";
import FilterByIndustrial from "../FilterByIndustrial";
import FilterByJobCarrer from "../FilterByJobCarrer";
import FilterByJobSalary from "../FilterByJobSalary";
import FilterByProvince from "../FilterByProvince";
import FilterByPosition from "../FilterByPosition";

export default class CategorySideBar extends React.Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { store } = context.store;

    this.state = {
      province_id: this.props.provinceId,
      industrial_id: this.props.industrialZoneId,
      carrer_id: this.props.carrerId,
      salary_id: this.props.salaryId,
      position_id: this.props.positionId
    };
  }

  updateFilterProvince = province_id => {
    this.setState({ province_id: province_id });
    this.props.updateStateFilter(province_id, null, null, null, null);
  };

  updateFilterIndustrial = industrial_id => {
    this.setState({ industrial_id: industrial_id });
    this.props.updateStateFilter(null, industrial_id, null, null, null);
  };
  updateFilterCarrer = carrer_id => {
    this.setState({ carrer_id: carrer_id });
    this.props.updateStateFilter(null, null, carrer_id, null, null);
  };
  updateFilterSalary = salary_id => {
    this.setState({ salary_id: salary_id });
    this.props.updateStateFilter(null, null, null, salary_id, null);
  };

  updateFilterPosisition = position_id => {
    this.setState({ position_id: position_id });
    this.props.updateStateFilter(null, null, null, null, position_id);
  };

  render() {
    const { l } = this.context.i18n;

    return (
      <div className="sidebar col-md-3 col-sm-4 hidden-xs">
        {/* {this.props.category_type === "carrer" ? (
          <FilterByProvince
            provinceId={this.props.provinceId}
            category_type={this.props.category_type}
            updateFilterProvince={this.updateFilterProvince}
          />
        ) : (
          ""
        )} */}

        {this.props.category_type === "province" ? (
          <FilterByIndustrial
            params={this.props.params}
            category_type={this.props.category_type}
            updateFilterIndustrial={this.updateFilterIndustrial}
            industrialZoneId={this.props.industrialZoneId}
          />
        ) : (
          ""
        )}
        {this.props.category_type !== "carrer" ? (
          <FilterByJobCarrer
            carrerId={this.props.carrerId}
            updateFilterCarrer={this.updateFilterCarrer}
          />
        ) : (
          ""
        )}

        {this.props.category_type !== "search" ? (
          <FilterByJobSalary
            salaryId={this.props.salaryId}
            updateFilterSalary={this.updateFilterSalary}
          />
        ) : (
          ""
        )}

        <FilterByPosition
          positionId={this.props.positionId}
          updateFilterPosisition={this.updateFilterPosisition}
        />
      </div>
    );
  }
}
