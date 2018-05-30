import React from "react";
import { object } from "prop-types";

export default class SiteBackLink extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    const imgStyle = {
      width: "140px",
      height: "auto"
    };
    return (
      <div className="col-md-12 col-sm-6">
        <div className="recent-alerts">
          <h4>Liên Kết Với Việc Làm Nam Bộ</h4>
          <div className="animated fadeIn">
            <div className="row backlinks">
              <div className="backlink">
                <div className="col-md-12 col-sm-6">
                  <a
                    target="_blank"
                    title="Việc làm Bình Dương, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Bình Dương"
                    href="http://vieclambinhduong.xyz/"
                    className="text-center"
                  >
                    <img
                      style={imgStyle}
                      src="/images/logoBackLink/VLBD-1.png"
                      title="Việc làm Bình Dương, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Bình Dương"
                      alt="Việc làm Bình Dương, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Bình Dương"
                    />
                  </a>
                </div>
                <div className="col-md-12 col-sm-6">
                  <a
                    target="_blank"
                    title="Việc làm Đồng Nai, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Đồng Nai"
                    href="http://vieclamdongnai.top/"
                    className="text-center"
                  >
                    <img
                      style={imgStyle}
                      src="/images/logoBackLink/VLDNai.png"
                      title="Việc làm Đồng Nai, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Đồng Nai"
                      alt="Việc làm Đồng Nai, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Đồng Nai"
                    />
                  </a>
                </div>
                <div className="col-md-12 col-sm-6">
                  {" "}
                  <a
                    target="_blank"
                    title="Việc làm Sài Gòn, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Sài Gòn"
                    href="http://vieclamsaigon.top/"
                    className="text-center"
                  >
                    <img
                      style={imgStyle}
                      src="/images/logoBackLink/VLSaiGon.png"
                      title="Việc làm Sài Gòn, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Sài Gòn"
                      alt="Việc làm Sài Gòn, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Sài Gòn"
                    />
                  </a>
                </div>
                <div className="col-md-12 col-sm-6">
                  {" "}
                  <a
                    target="_blank"
                    title="Việc làm Long An, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Long An"
                    href="http://vieclamlongan.top/"
                    className="text-center"
                  >
                    <img
                      style={imgStyle}
                      src="/images/logoBackLink/VLLongAn.png"
                      title="Việc làm Long An, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Long An"
                      alt="Việc làm Long An, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Long An"
                    />
                  </a>
                </div>
                <div className="col-md-12 col-sm-6">
                  <a
                    target="_blank"
                    title="Việc làm Tiền Giang, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Tiền Giang"
                    href="http://vieclamtiengiang.top/"
                    className="text-center"
                  >
                    <img
                      style={imgStyle}
                      src="/images/logoBackLink/VLTGiang.png"
                      title="Việc làm Tiền Giang, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Tiền Giang"
                      alt="Việc làm Tiền Giang, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Tiền Giang"
                    />
                  </a>
                </div>
                <div className="col-md-12 col-sm-6">
                  {" "}
                  <a
                    target="_blank"
                    title="Việc làm Cần Thơ, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Cần Thơ"
                    href="http://vieclamcantho.space/"
                    className="text-center"
                  >
                    <img
                      style={imgStyle}
                      src="/images/logoBackLink/cantho.png"
                      title="Việc làm Cần Thơ, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Cần Thơ"
                      alt="Việc làm Cần Thơ, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Cần Thơ"
                    />
                  </a>
                </div>
                <div className="col-md-12 col-sm-6">
                  {" "}
                  <a
                    target="_blank"
                    title="Việc làm Vĩnh Long, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Vĩnh Long"
                    href="http://vieclamvinhlong.info/"
                    className="text-center"
                  >
                    <img
                      style={imgStyle}
                      src="/images/logoBackLink/vinhlong.png"
                      title="Việc làm Vĩnh Long, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Vĩnh Long"
                      alt="Việc làm Vĩnh Long, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Vĩnh Long"
                    />
                  </a>
                </div>
                <div className="col-md-12 col-sm-6">
                  {" "}
                  <a
                    target="_blank"
                    title="Việc làm Vũng Tàu, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Vũng Tàu"
                    href="http://vieclamvungtau.info/"
                    className="text-center"
                  >
                    <img
                      style={imgStyle}
                      src="/images/logoBackLink/ViecLamVungTau.png"
                      title="Việc làm Vũng Tàu, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Vũng Tàu"
                      alt="Việc làm Vũng Tàu, thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Vũng Tàu"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
