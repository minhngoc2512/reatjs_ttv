import { Component } from "react";
import { object } from "prop-types";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import ManageUserInformation from "../../components/ManageUserInformation";
import ManageUserPassword from "../../components/ManageUserPassword";
export default class ManageUser extends Component {
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
          <ManageUserInformation />
          <ManageUserPassword />
        </div>
      </main>
    );
  }
}
