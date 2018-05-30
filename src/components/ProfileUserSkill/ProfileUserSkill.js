import { Component } from "react";
import { object } from "prop-types";
export default class ProfileUserSkill extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="row col-md-12 u-detail-r-1">
        <div className="col-md-12  col-sm-12 col-xs-12">
          <h3 className="u-detail-inf-1">
            <i className="fa fa-bolt" aria-hidden="true" /> Kỹ năng
            <a href="#">
              <i className="fa fa-pencil icon-u-float" aria-hidden="true" />
            </a>
          </h3>
        </div>
        <div className=" col-md-12">
          <span className="u-skill">Thành thạo kỹ năng chuyên môn</span>
          <span className="u-skill">PHP</span>
          <span className="u-skill">JAVA</span>
          <span className="u-skill">HTML</span>
        </div>
      </div>
    );
  }
}
