import { Component } from "react";
import { object } from "prop-types";
import ProfileUserBar from "../../components/ProfileUserBar";
import ProfileUserIndex from "../../components/ProfileUserIndex";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
export default class ProfileUser extends Component {
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
          <div className="container">
            <ProfileUserIndex />
            <ProfileUserBar />
          </div>
        </section>
      </main>
    );
  }
}
