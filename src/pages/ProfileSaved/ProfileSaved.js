import { Component } from "react";
import { object } from "prop-types";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import ProfileSavedItem from "../../components/ProfileSavedItem";
export default class ProfileSeved extends Component {
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
              <h2 className="title-employer">HỒ SƠ ĐÃ LƯU</h2>
              <div className="line-color" />
            </div>
            <div className="row">
              <h3 className="info-job">
                Tìm thấy
                <span>50</span> hồ sơ phừ hợp với kết quả tìm kiếm:
              </h3>
            </div>
            <div className="row">
              <ProfileSavedItem />
              <ProfileSavedItem />
              <ProfileSavedItem />
              <ProfileSavedItem />
              <ProfileSavedItem />
              <ProfileSavedItem />
              <ProfileSavedItem />
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
