import React from "react";
import { object } from "prop-types";
import { Link } from "react-router";

export default class IndustrialDetail extends React.Component {
  static contextTypes = {
    i18n: object
  };

  render() {
    const { l } = this.context.i18n;
    let slug = "";
    if (this.props.industrialSlugPattern[this.props.industrial.id]) {
      slug =
        "/" +
        this.props.provinceslug +
        "/" +
        this.props.industrialSlugPattern[this.props.industrial.id];
    } else {
      slug = "/" + this.props.provinceslug;
    }

    let industrialName = this.props.industrialNamePattern[
      this.props.industrial.id
    ]
      .replace("Khu công nghiệp", "")
      .replace("Khu Công Nghiệp", "")
      .replace("Khu Chế Xuất", "")
      .replace("Việc làm", "")
      .replace("khu công nghiệp", "");

    return (
      <li>
        <Link
          title={this.props.industrialNamePattern[this.props.industrial.id]}
          to={slug}
        >
          {industrialName}{" "}
          {/* <span>({this.props.industrial.job_avail_count})</span> */}
        </Link>
        {/* <a href={slug}>
          {industrialName} ({this.props.industrial.job_total_count})
        </a> */}
      </li>
    );
  }
}
