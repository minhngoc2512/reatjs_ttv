import React from "react";
import { object } from "prop-types";
import IndustrialDetail from "../IndustrialDetail";

export default class IndustriProvince extends React.Component {
  static contextTypes = {
    i18n: object
  };

  render() {
    const { l } = this.context.i18n;
    //lay ra list KCN
    const industrialSlugPattern = {};
    this.props.taxonomy.forEach(item => {
      if (item.taxonomy_type === "industrial_zone") {
        industrialSlugPattern[item.taxonomy_id] = item.slug;
      }
    });

    const industrialNamePattern = {};
    this.props.taxonomy.forEach(item => {
      if (item.taxonomy_type === "industrial_zone") {
        industrialNamePattern[item.taxonomy_id] = item.seo_title;
      }
    });

    //lay ra slug tinh thanh
    const provinceSlugPattern = {};
    this.props.taxonomy.forEach(item => {
      if (item.taxonomy_type === "province" && item.slug.indexOf("-o-") >= 0) {
        provinceSlugPattern[item.taxonomy_id] = item.slug;
      }
    });

    const provinceSlug = provinceSlugPattern[this.props.province.id];

    const industrials = this.props.province.industrial_zones.sort(function(
      a,
      b
    ) {
      return parseFloat(b.job_avail_count) - parseFloat(a.job_avail_count);
    });
    let i = 0;
    const industrialzone = industrials.map((industrial, index) => {
      if (i < 6 && industrialSlugPattern[industrial.id]) {
        i++;
        return (
          <IndustrialDetail
            provinceslug={provinceSlug}
            industrialSlugPattern={industrialSlugPattern}
            key={index}
            industrial={industrial}
            industrialNamePattern={industrialNamePattern}
          />
        );
      }
    });
    return (
      <div className="col-md-3 col-sm-6">
        <div className="panel-header">
          <h3 className="no-margin no-padding">{this.props.province.name}</h3>
        </div>
        <ul className="job-category-list">{industrialzone}</ul>
      </div>
    );
  }
}
