import { Component } from "react";
import { object } from "prop-types";
import SearchProfileResultIndexItem from "../SearchProfileResultIndexItem";
export default class SearchProfileResultIndex extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="col-md-8 col-md-offset-2 container-employer">
        <div className="row title-content">
          <div className="line-color" />
          <h2 className="title-employer">KẾT QUẢ TÌM KIẾM</h2>
          <div className="line-color" />
        </div>
        <div className="row">
          <h3 className="info-job">
            Tìm thấy
            <span>50</span> hồ sơ phừ hợp với kết quả tìm kiếm:
          </h3>
        </div>
        <div className="row">
          <SearchProfileResultIndexItem />
          <SearchProfileResultIndexItem />
          <SearchProfileResultIndexItem />
        </div>
        <ul className="pagination float-right-search">
          <li>
            <a href="#">1</a>
          </li>
          <li className="active">
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
        </ul>
      </div>
    );
  }
}
