import React from "react";
import { object } from "prop-types";

export default class TabDetail extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <li role="presentation" className="active">
        <a href="#jobs" aria-controls="jobs" role="tab" data-toggle="tab">
          Việc làm nổi bật
        </a>
      </li>
    );
  }
}
