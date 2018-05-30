import { Component } from "react";
import PropTypes from "prop-types";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import Helmet from "react-helmet";

export default class Introduce extends Component {
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
            <strong>1. Giới thiệu dịch vụ</strong>
            <strong>Việc làm Nam Bộ</strong> là trang thông tin tổng hợp các tin
            tức tuyển dụng, các bài viết chuyên về chủ đề Việc làm tại<strong>
               các khu công nghiệp, khu chế xuất thuộc 5 tỉnh phía Nam có nền
              kinh tế phát triển, bao gồm:
            </strong>
            <ol>
              <li>
                <strong>
                  <a
                    style="color: #175382;"
                    href="http://vieclamnambo.vn/viec-lam-binh-duong"
                  >
                    Việc làm Bình Dương
                  </a>
                </strong>
                <strong>:</strong>
                <em>
                  {" "}
                  <a href="http://vieclamnambo.vn/viec-lam-binh-duong/viec-lam-khu-cong-nghiep-vsip">
                    KCN Vsip
                  </a>,{" "}
                  <a href="http://vieclamnambo.vn/viec-lam-binh-duong/viec-lam-khu-cong-nghiep-song-than">
                    Sóng Thần
                  </a>,{" "}
                  <a href="http://vieclamnambo.vn/viec-lam-binh-duong/viec-lam-khu-cong-nghiep-nam-tan-uyen">
                    Nam Tân Uyên
                  </a>,{" "}
                  <a href="http://vieclamnambo.vn/viec-lam-binh-duong/viec-lam-khu-cong-nghiep-rach-bap">
                    Rạch Bắp
                  </a>,{" "}
                  <a href="http://vieclamnambo.vn/viec-lam-binh-duong/viec-lam-khu-cong-nghiep-viet-huong">
                    Việt Hương
                  </a>...<strong> </strong>
                </em>
              </li>
              <li>
                <strong>
                  <a
                    style="color: #175382;"
                    href="http://vieclamnambo.vn/viec-lam-dong-nai"
                  >
                    Việc làm Đồng Nai
                  </a>
                </strong>
                <strong>:</strong>
                <em>
                  {" "}
                  KCN Biên Hoà I, II, AMATA, Nhơn Trạch I, II, III, LOTECO....
                </em>
              </li>
              <li>
                <strong>
                  <a
                    style="color: #175382;"
                    href="http://vieclamnambo.vn/viec-lam-sai-gon"
                  >
                    Việc làm Sài Gòn
                  </a>
                </strong>
                <strong>:</strong>
                <em>
                  {" "}
                  KCX Tân Thuận, KCN Tân Bình, Tân Tạo, Hiệp Phước, Tây Bắc Củ
                  Chi....
                </em>
              </li>
              <li>
                <strong>
                  <a
                    style="color: #175382;"
                    href="http://vieclamnambo.vn/viec-lam-long-an"
                  >
                    Việc làm Long An
                  </a>
                </strong>
                <strong>:</strong>
                <em>
                  {" "}
                  KCN Thuận Đạo, Long Cang - Long Định, Cầu Tràm, Phúc Long, Lợi
                  Bình Nhơn...
                </em>
              </li>
              <li>
                <strong>
                  <a
                    style="color: #175382;"
                    href="http://vieclamnambo.vn/viec-lam-tien-giang"
                  >
                    Việc làm Tiền Giang
                  </a>
                </strong>
                <strong>:</strong>
                <em> KCN Tân Hương, Long Giang, Mỹ Tho...</em>
              </li>
              <li>
                <strong>
                  <a
                    style="color: #175382;"
                    href="http://vieclamnambo.vn/viec-lam-vung-tau"
                  >
                    Việc làm Vũng Tàu
                  </a>
                </strong>: KCN Phú Mỹ 1, Phú Mỹ 2, Mỹ Xuân A, Mỹ Xuân B1, Đông
                Xuyên ...
              </li>
            </ol>
            Đặc biệt, Việc làm Nam Bộ cập nhật những việc làm mới nhất tại các
            quận, huyện thuộc Sài Gòn như: Việc làm <em>
              <a href="http://vieclamnambo.vn/tag/viec-lam-quan-7">Quận 7</a>
            </em>, Việc làm<em>
              {" "}
              <a href="http://vieclamnambo.vn/tag/viec-lam-quan-9">Quận 9</a>
            </em>, Việc làm quận{" "}
            <em>
              <a href="http://vieclamnambo.vn/tag/viec-lam-quan-binh-tan">
                Bình Tân
              </a>,{" "}
              <a href="http://vieclamnambo.vn/tag/viec-lam-quan-thu-duc">
                Thủ Đức
              </a>,{" "}
              <a href="http://vieclamnambo.vn/tag/viec-lam-quan-tan-phu">
                Tân Phú
              </a>,..
            </em>
            Hàng ngàn các thông tin cập nhật về kỹ năng nghề nghiệp, kỹ năng
            tuyển dụng và thông tin tuyển dụng được cập nhật hàng ngày tại các
            Khu công nghiệp, Khu chế xuất thuộc các tỉnh Nam Bộ đều có tại{" "}
            <strong>Việc làm Nam Bộ. </strong>
            <strong>Việc làm Nam Bộ </strong>chính là nơi để các bạn đọc đang có
            nhu cầu tìm việc/đổi việc hay đơn giản chỉ là tìm kiếm, trau dồi các
            kỹ năng nghề nghiệp v.v… có thể nhanh chóng và dễ dàng nắm bắt được
            những tin bài tổng hợp, cập nhật liên quan tới những chủ đề Việc làm
            mà mình quan tâm, yêu thích.
            <strong>2. Các nội dung cung cấp</strong>
            <table class=" aligncenter" style="width: 795px; height: 461px;">
              <thead>
                <tr style="height: 24px;">
                  <td style="width: 47px; text-align: left; height: 24px;">
                    <strong>STT</strong>
                  </td>
                  <td style="width: 129px; text-align: left; height: 24px;">
                    <strong>Gói dịch vụ</strong>
                  </td>
                  <td style="width: 156px; text-align: left; height: 24px;">
                    <strong>Cú pháp</strong>
                  </td>
                  <td style="width: 123px; text-align: left; height: 24px;">
                    <strong>Giá cước</strong>
                  </td>
                  <td style="width: 307px; text-align: left; height: 24px;">
                    <strong>Nội dung trả tin hàng ngày</strong>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr style="height: 24px;">
                  <td style="width: 47px; text-align: left; height: 24px;">
                    1
                  </td>
                  <td style="width: 129px; text-align: left; height: 24px;">
                    Gói Tổng hợp
                  </td>
                  <td style="width: 156px; text-align: left; height: 24px;">
                    <a href="http://vieclamnambo.vn/">DK TG</a> gửi 565
                  </td>
                  <td style="width: 123px; text-align: left; height: 24px;">
                    2.000đ / ngày
                  </td>
                  <td style="width: 307px; text-align: left; height: 24px;">
                    Tin tức việc làm mới nhất tại khu vực phía Nam
                  </td>
                </tr>
                <tr style="height: 24px;">
                  <td style="width: 47px; text-align: left; height: 24px;">
                    2
                  </td>
                  <td style="width: 129px; text-align: left; height: 24px;">
                    Gói Bình Dương
                  </td>
                  <td style="width: 156px; text-align: left; height: 24px;">
                    <a href="http://vieclamnambo.vn/viec-lam-binh-duong">
                      DK BD
                    </a> gửi 565
                  </td>
                  <td style="width: 123px; text-align: left; height: 24px;">
                    2.000đ / ngày
                  </td>
                  <td style="width: 307px; text-align: left; height: 24px;">
                    Tin tức việc làm tại tỉnh Bình Dương
                  </td>
                </tr>
                <tr style="height: 24px;">
                  <td style="width: 47px; text-align: left; height: 24px;">
                    3
                  </td>
                  <td style="width: 129px; text-align: left; height: 24px;">
                    Gói Đồng Nai
                  </td>
                  <td style="width: 156px; text-align: left; height: 24px;">
                    <a href="http://vieclamnambo.vn/viec-lam-dong-nai">DK DN</a> gửi
                    565
                  </td>
                  <td style="width: 123px; text-align: left; height: 24px;">
                    2.000đ / ngày
                  </td>
                  <td style="width: 307px; text-align: left; height: 24px;">
                    Tin tức việc làm tại tỉnh Đồng Nai
                  </td>
                </tr>
                <tr style="height: 24px;">
                  <td style="width: 47px; text-align: left; height: 24px;">
                    4
                  </td>
                  <td style="width: 129px; text-align: left; height: 24px;">
                    Gói Sài Gòn
                  </td>
                  <td style="width: 156px; text-align: left; height: 24px;">
                    <a href="http://vieclamnambo.vn/viec-lam-sai-gon">DK SG</a> gửi
                    565
                  </td>
                  <td style="width: 123px; text-align: left; height: 24px;">
                    2.000đ / ngày
                  </td>
                  <td style="width: 307px; text-align: left; height: 24px;">
                    Tin tức việc làm tại tỉnh Sài Gòn
                  </td>
                </tr>
                <tr style="height: 24px;">
                  <td style="width: 47px; text-align: left; height: 24px;">
                    5
                  </td>
                  <td style="width: 129px; text-align: left; height: 24px;">
                    Gói Tiền Giang
                  </td>
                  <td style="width: 156px; text-align: left; height: 24px;">
                    <a href="http://vieclamnambo.vn/viec-lam-tien-giang">
                      DK TI
                    </a> gửi 565
                  </td>
                  <td style="width: 123px; text-align: left; height: 24px;">
                    2.000đ / ngày
                  </td>
                  <td style="width: 307px; text-align: left; height: 24px;">
                    Tin tức việc làm tại tỉnh Tiền Giang
                  </td>
                </tr>
                <tr style="height: 24px;">
                  <td style="width: 47px; text-align: left; height: 24px;">
                    6
                  </td>
                  <td style="width: 129px; text-align: left; height: 24px;">
                    Gói Long An
                  </td>
                  <td style="width: 156px; text-align: left; height: 24px;">
                    <a href="http://vieclamnambo.vn/viec-lam-long-an">DK LA</a> gửi
                    565
                  </td>
                  <td style="width: 123px; text-align: left; height: 24px;">
                    2.000đ / ngày
                  </td>
                  <td style="width: 307px; text-align: left; height: 24px;">
                    Tin tức việc làm tại tỉnh Long An
                  </td>
                </tr>
                <tr style="height: 24px;">
                  <td style="width: 47px; text-align: left; height: 24px;">
                    7
                  </td>
                  <td style="width: 129px; text-align: left; height: 24px;">
                    Gói Vũng Tàu
                  </td>
                  <td style="width: 156px; text-align: left; height: 24px;">
                    <a href="http://vieclamnambo.vn/viec-lam-vung-tau">DK VT</a>{" "}
                    gửi 565
                  </td>
                  <td style="width: 123px; text-align: left; height: 24px;">
                    2.000đ / ngày
                  </td>
                  <td style="width: 307px; text-align: left; height: 24px;">
                    Tin tức việc làm tại tỉnh  Bà Rịa - Vũng Tàu
                  </td>
                </tr>
                <tr style="height: 48px;">
                  <td style="width: 47px; text-align: left; height: 48px;">
                    8
                  </td>
                  <td style="width: 129px; text-align: left; height: 48px;">
                    Hướng dẫn sử dụng
                  </td>
                  <td style="width: 156px; text-align: left; height: 48px;">
                    HDSD gửi 565
                  </td>
                  <td style="width: 123px; text-align: left; height: 48px;">
                    Miễn phí
                  </td>
                  <td style="width: 307px; text-align: left; height: 48px;">
                    Hướng dẫn chi tiết sử dụng dịch vụ
                  </td>
                </tr>
                <tr style="height: 24px;">
                  <td style="width: 47px; text-align: left; height: 24px;">
                    9
                  </td>
                  <td style="width: 129px; text-align: left; height: 24px;">
                    Kiểm tra dịch vụ
                  </td>
                  <td style="width: 156px; text-align: left; height: 24px;">
                    KTDV gửi 565
                  </td>
                  <td style="width: 123px; text-align: left; height: 24px;">
                    Miễn phí
                  </td>
                  <td style="width: 307px; text-align: left; height: 24px;">
                    Kiểm tra các dịch vụ đang sử dụng
                  </td>
                </tr>
                <tr style="height: 48px;">
                  <td style="width: 47px; text-align: left; height: 48px;">
                    10
                  </td>
                  <td style="width: 129px; text-align: left; height: 48px;">
                    Sai cú pháp
                  </td>
                  <td style="width: 156px; text-align: left; height: 48px;">
                    [ABC_sai cu phap] gửi 565
                  </td>
                  <td style="width: 123px; text-align: left; height: 48px;">
                    Miễn phí
                  </td>
                  <td style="width: 307px; text-align: left; height: 48px;">
                    Thông báo tin nhắn Sai cú pháp
                  </td>
                </tr>
                <tr style="height: 48px;">
                  <td style="width: 47px; text-align: left; height: 48px;">
                    11
                  </td>
                  <td style="width: 129px; text-align: left; height: 48px;">
                    Hủy dịch vụ đơn lẻ
                  </td>
                  <td style="width: 156px; text-align: left; height: 48px;">
                    HUY [mã KV] gửi 565
                  </td>
                  <td style="width: 123px; text-align: left; height: 48px;">
                    Miễn phí
                  </td>
                  <td style="width: 307px; text-align: left; height: 48px;">
                    Hủy dịch vụ đang sử dụng
                  </td>
                </tr>
                <tr style="height: 43px;">
                  <td style="width: 47px; text-align: left; height: 43px;">
                    12
                  </td>
                  <td style="width: 129px; text-align: left; height: 43px;">
                    Hủy toàn bộ dịch vụ
                  </td>
                  <td style="width: 156px; text-align: left; height: 43px;">
                    HUY TBDV gửi 565
                  </td>
                  <td style="width: 123px; text-align: left; height: 43px;">
                    Miễn phí
                  </td>
                  <td style="width: 307px; text-align: left; height: 43px;">
                    Hủy toàn bộ dịch vụ đang sử dụng
                  </td>
                </tr>
              </tbody>
            </table>
            &nbsp;
            <p class="">
              <strong>3. Sử dụng dịch vụ</strong>
            </p>
            <p class="">Dịch vụ cung cấp 2 hình thức thuê bao sử dụng:</p>
            <ul class="sddv">
              <li class="">
                <p class="">
                  Cập nhật các thông tin qua SMS/MMS do hệ thống trả tin
                </p>
              </li>
              <li class="">
                <p class="">
                  Truy cập wapsite <a>www.vieclamnambo.vn</a> để cập nhật các
                  thông tin việc làm mới nhất
                </p>
              </li>
              <li class="">
                <p class="">Hotline dịch vụ 01864899497</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
