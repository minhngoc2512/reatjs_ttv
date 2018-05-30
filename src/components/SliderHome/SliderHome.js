import { Component } from "react";
import { object } from "prop-types";
import { push } from "react-router-redux";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0e9bd6" }}
      onClick={onClick}
    >
      <i className="icon-angle-left" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0e9bd6" }}
      onClick={onClick}
    />
  );
}

export default class SliderHome extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  render() {
    const settings = {
      arrows: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    const imgStyle = {
      width: "140px",
      height: "auto"
    };
    return (
      <Slider {...settings}>
        <div>
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

        <div>
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

        <div>
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

        <div>
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

        <div>
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

        {/* <div>
          <a
            target="_blank"
            title="Thông tin việc làm Việc Làm Kế Toán trong Khu Công Nghiệp - Việc Làm Kế Toán"
            href="http://vieclamketoan.space/"
            className="text-center"
          >
            <img
              style={imgStyle}
              src="/images/logoBackLink/VLKETOAN.png"
              title="Thông tin việc làm Việc Làm Kế Toán trong Khu Công Nghiệp - Việc Làm Kế Toán"
              alt="Thông tin việc làm Việc Làm Kế Toán trong Khu Công Nghiệp - Việc Làm Kế Toán"
            />
          </a>
        </div> */}

        {/* <div>
          <a
            target="_blank"
            title="Tuyển dụng công nhân, việc làm khu công nghiệp, nhà máy - Việc Làm Công Nhân"
            href="http://vieclamcongnhan.space/"
            className="text-center"
          >
            <img
              style={imgStyle}
              src="/images/logoBackLink/VLCongNhan.png"
              title="Tuyển dụng công nhân, việc làm khu công nghiệp, nhà máy - Việc Làm Công Nhân"
              alt="Tuyển dụng công nhân, việc làm khu công nghiệp, nhà máy - Việc Làm Công Nhân"
            />
          </a>
        </div> */}

        {/* <div>
          <a
            target="_blank"
            title="Thông tin việc làm Việc Làm May Mặc trong Khu Công Nghiệp - Việc Làm May Mặc"
            href="http://vieclammaymac.space/"
            className="text-center"
          >
            <img
              style={imgStyle}
              src="/images/logoBackLink/VLMayMac.png"
              title="Thông tin việc làm Việc Làm May Mặc trong Khu Công Nghiệp - Việc Làm May Mặc"
              alt="Thông tin việc làm Việc Làm May Mặc trong Khu Công Nghiệp - Việc Làm May Mặc"
            />
          </a>
        </div> */}
        {/* 
        <div>
          <a
            target="_blank"
            title="Thông tin tuyển dụng, việc làm ngành thuỷ hải sản mới nhất tại các khu công nghiệp trên địa bàn các tỉnh thành phía Nam. - Việc Làm Thủy Sản"
            href="http://vieclamthuysan.space/"
            className="text-center"
          >
            <img
              style={imgStyle}
              src="/images/logoBackLink/VLThuySan.png"
              title="Thông tin tuyển dụng, việc làm ngành thuỷ hải sản mới nhất tại các khu công nghiệp trên địa bàn các tỉnh thành phía Nam. - Việc Làm Thủy Sản"
              alt="Thông tin tuyển dụng, việc làm ngành thuỷ hải sản mới nhất tại các khu công nghiệp trên địa bàn các tỉnh thành phía Nam. - Việc Làm Thủy Sản"
            />
          </a>
        </div> */}

        {/* <div>
          <a
            target="_blank"
            title="Thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Khu Công Nghiệp - Việc Làm Khu Công Nghiệp"
            href="http://vieclamkcn.info/"
            className="text-center"
          >
            <img
              style={imgStyle}
              src="/images/logoBackLink/noinhieuviec.png"
              title="Thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Khu Công Nghiệp - Việc Làm Khu Công Nghiệp"
              alt="Thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên, khu công nghiệp tại Khu Công Nghiệp - Việc Làm Khu Công Nghiệp"
            />
          </a>
        </div> */}

        {/* <div>
          <a
            target="_blank"
            title="Thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên tại Khu Công Nghiệp - Việc Làm Khu Công Nghiệp"
            href="http://vieclamkcn.net/"
            className="text-center"
          >
            <img
              style={imgStyle}
              src="/images/logoBackLink/QuanTam.png"
              title="Thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên tại Khu Công Nghiệp - Việc Làm Khu Công Nghiệp"
              alt="Thông tin việc làm công nhân, kế toán, may mặc, việc làm thêm, sinh viên tại Khu Công Nghiệp - Việc Làm Khu Công Nghiệp"
            />
          </a>
        </div> */}
        <div>
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

        <div>
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
      </Slider>
    );
  }
}
