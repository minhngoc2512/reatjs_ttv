import React from "react";
import { object } from "prop-types";

export default class IndustrialZoneSummary extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <div className="row">
        <div className="col-md-8 col-md-12">
          <h2 className="text-center industrial">
            <p>TỈNH THÀNH, KHU CÔNG NGHIỆP CÓ NHIỀU VIỆC LÀM</p>
          </h2>
        </div>
      </div>
    );
  }
}
