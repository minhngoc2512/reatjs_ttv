import React from "react";
import TabDetail from "../TabDetail";
import { object } from "prop-types";

export default class JobTabFilter extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active">
          <a
            href="#joblistfeature"
            aria-controls="joblistfeature"
            role="tab"
            data-toggle="tab"
            aria-expanded="false"
          >
            <span className="hidden-xs hidden-sm">Việc Làm </span>Nổi Bật
          </a>
        </li>
        <li role="presentation" className="">
          <a
            href="#joblistnew"
            aria-controls="joblistnew"
            role="tab"
            data-toggle="tab"
            aria-expanded="true"
          >
            <span className="hidden-xs hidden-sm">Việc Làm </span>Mới Nhất
          </a>
        </li>
        <li role="presentation" className="">
          <a
            href="#topindustrialzone"
            aria-controls="topindustrialzone"
            role="tab"
            data-toggle="tab"
            aria-expanded="false"
          >
            <span className="hidden-xs hidden-sm">Việc Làm </span>Khu Công
            Nghiệp
          </a>
        </li>
      </ul>
    );
  }
}
