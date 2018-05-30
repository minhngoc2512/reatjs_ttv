import { Component } from "react";
import { object } from "prop-types";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import PostSubmittedItem from "../../components/PostSubmittedItem";
export default class PostSubmmited extends Component {
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
        <div className="container-fluid page-background-1">
          <div className="col-md-8 col-md-offset-2 container-employer">
            <div className="row title-content">
              <div className="line-color" />
              <h2 className="title-employer">CÁC TIN ĐÃ ĐĂNG</h2>
              <div className="line-color" />
            </div>
            <div id="option-page-company" className=" row sort-ps">
              <span>Sắp xếp theo:</span>
              <select className="form-select-company">
                <option>Ngày đăng mới nhất</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
            <div className="row">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tiêu đề</th>
                      <th>Ngày đăng tin</th>
                      <th>Ngày hết hạn</th>
                      <th>Số lượt xem</th>
                      <th>Hồ sơ ứng tuyển</th>
                    </tr>
                  </thead>
                  <tbody>
                    <PostSubmittedItem />
                    <PostSubmittedItem />
                    <PostSubmittedItem />
                    <PostSubmittedItem />
                    <PostSubmittedItem />
                  </tbody>
                </table>
              </div>
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
        </div>
      </main>
    );
  }
}
