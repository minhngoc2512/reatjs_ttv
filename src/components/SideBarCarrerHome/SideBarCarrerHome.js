import React from "react";
import { object } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router";

export class SideBarCarrerHome extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const carrerSlugPattern = {};
    this.props.taxonomy.forEach(item => {
      if (item.taxonomy_type === "carrer") {
        carrerSlugPattern[item.taxonomy_id] = item.slug;
      }
    });
    const filterByJobCarrer =
      typeof this.props.filterByJobCarrer !== "undefined"
        ? this.props.filterByJobCarrer
        : [];

    const carrer = filterByJobCarrer.map((item, index) => {
      if (carrerSlugPattern[item.id]) {
        return (
          <div key={index} className="col-md-12">
            <div className="carrer">
              <Link title={item.name} to={carrerSlugPattern[item.id]}>
                {item.name
                  .replace("/", " - ")
                  .replace("/", " - ")
                  .replace("/", " - ", 3)}
              </Link>
            </div>
          </div>
        );
      }
    });
    return (
      <div className="col-md-12 col-sm-6">
        <div className="recent-alerts">
          <h4>Việc Làm Theo Ngành Nghề</h4>
          <div className="animated fadeIn">
            <div className="row carrers">{carrer}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy.data.data,
    filterByJobCarrer: state.filterbyjobcarrer.data.data
  };
};

export default connect(mapStateToProps)(SideBarCarrerHome);
