import { Component } from "react";
import { object } from "prop-types";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import JobApplyItem from "../../components/JobApplyItem/";
export default class JobApply extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <main>
        <section className="category">
          <div className="container form-wrapper">
            <h2>Hàng Ngàn Công Việc Mới Đang Chờ Bạn</h2>
            <span>Đúng Người - Đúng Việc - Nhanh Chóng - Chính Xác</span>
          </div>
        </section>
        <SearchBarNotIndex />
        <section className="page-background-1">
          <div className="container job-applied">
            <div className="row title-job-a">
              <h3>VIỆC LÀM ĐÃ ỨNG TUYỂN</h3>
            </div>
            <JobApplyItem />
            <JobApplyItem />
            <JobApplyItem />
            <ul className="pagination">
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
        </section>
      </main>
    );
  }
}
