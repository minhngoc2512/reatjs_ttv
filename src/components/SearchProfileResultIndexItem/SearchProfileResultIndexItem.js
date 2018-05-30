import { Component } from "react";
import { object } from "prop-types";
export default class SearchProfileResultIndexItem extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="col-md-12 col-sm-12 job-list-search">
        <div className=" title-job-search">
          <h3>
            <a href="#" title>
              Công nhân cơ khí
            </a>
          </h3>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 font-text-search">
            <h3>Nguyễn Văn Nam</h3>
            <h3>26 tuổi</h3>
          </div>
          <div className="col-md-3 col-sm-3 font-text-search">
            <h3>
              <i className="fa fa-map-marker" aria-hidden="true" />
              <a href="#">Long An</a>
            </h3>
            <h3>
              <i className="fa fa-briefcase" aria-hidden="true" /> Cơ khí
            </h3>
          </div>
          <div className="col-md-3 col-sm-3 font-text-search">
            <h3>
              <i className="fa fa-calendar-o" aria-hidden="true" />
              <span>2</span> năm
            </h3>
            <h3>
              <i className="fa fa-suitcase" aria-hidden="true" />Công nhân
            </h3>
          </div>
          <div className="col-md-3 col-sm-3 font-text-search">
            <h3>
              <span>
                <i>Cập nhật: 20/11/2017</i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
