import React from "react";
import Image from "./../Image";
import { object } from "prop-types";

export default class NewsLetter extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <div className="col-md-12 col-sm-6">
        <div className="recent-alerts">
          <h4>Nhận Tin Nhắn Việc Làm</h4>
          <div className="row register_job">
            <form className="form-inline">
              <div className="form-group col-md-9 col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="  Nhập Email..."
                />
              </div>
              <div className="form-group col-md-3 col-sm-3">
                <input
                  type="submit"
                  className="form-control send"
                  value="Gửi"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
