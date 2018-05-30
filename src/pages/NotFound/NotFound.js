import { Component } from "react";
import PropTypes from "prop-types";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import Helmet from "react-helmet";

export default class NotFound extends Component {
  static contextTypes = {
    i18n: PropTypes.object
  };

  render() {
    const { l } = this.context.i18n;
    return (
      <div>
        <Helmet />
        <section className="category">
          <div className="container form-wrapper">
            <h2>Hàng Ngàn Công Việc Mới Đang Chờ Bạn</h2>
            <span>Cổng thông tin việc làm hàng đầu khu vực phía Nam</span>
          </div>
        </section>
        {/* <SearchBarNotIndex /> */}
        <section className="search-result">
          <div className="container">
            <div className="row" />
            <div className="col-md-12">
              <div className="text-center">
                <h2>404 Not Found</h2>
                <div className="error-details">
                  Không tìm thấy trang này - Việc Làm Nam Bộ | Cổng thông tin
                  việc làm hàng đầu khu vực phía Nam
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
