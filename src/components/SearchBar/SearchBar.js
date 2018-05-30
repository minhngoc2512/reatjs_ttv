import { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { push } from "react-router-redux";
import { Link } from "react-router";
import { loadFilterByProvince } from "./../../redux/modules/filterbyprovince/actions";
import { loadCountHomeJob } from "./../../redux/modules/countJobHome/actions";
import SliderBanner from "./../SliderBanner";

// import HomeCarousel from "../HomeCarousel";
class SearchBar extends Component {
  static contextTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }),
    store: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    // this.context.store.dispatch(loadFilterByProvince());

    // this.context.store.dispatch(loadFilterByJobCarrer(4));

    // this.context.store.dispatch(loadCountHomeJob());

    this.updateLocationValue = this.updateLocationValue.bind(this);
    this.updateSalaryValue = this.updateSalaryValue.bind(this);
    this.updateKeyWordValue = this.updateKeyWordValue.bind(this);

    this.state = {
      selectKeyWord: "",
      selectSalaryValue: "undefined",
      selectLocationValue: "undefined",
      banner: "url(/images/banner/1.jpg) center center no-repeat"
    };
  }
  updateLocationValue(newValue) {
    this.setState({
      selectLocationValue: newValue
    });
  }
  updateSalaryValue(newValue) {
    this.setState({
      selectSalaryValue: newValue
    });
  }
  updateKeyWordValue(newValue) {
    this.setState({
      selectKeyWord: newValue.target.value
    });
  }

  chooseClick = (e, data) => {
    this.props.updateSearch(
      typeof this.state.selectKeyWord !== "undefined"
        ? this.state.selectKeyWord
        : "",
      typeof this.state.selectLocationValue.value !== "undefined"
        ? this.state.selectLocationValue.value
        : "",
      typeof this.state.selectSalaryValue.value !== "undefined"
        ? this.state.selectSalaryValue.value
        : ""
    );
  };

  componentDidMount() {
    this.banner = setInterval(() => this.setBanner(), 20000);
  }

  componentWillUnmount() {
    clearInterval(this.banner);
  }

  setBanner() {
    const items = [
      "url(/images/banner/1.jpg) center center no-repeat",
      "url(/images/banner/2.jpg) center center no-repeat",
      "url(/images/banner/3.jpg) center center no-repeat",
      "url(/images/banner/4.jpg) center center no-repeat",
      "url(/images/banner/5.jpg) center center no-repeat"
    ];
    let banner = items[Math.floor(Math.random() * items.length)];
    if (banner === this.state.banner) {
      banner = items[Math.floor(Math.random() * items.length)];
    }
    this.setState({
      banner: banner
    });
  }

  render() {
    const bannerStyle = {
      background: this.state.banner,
      height: "70vh"
    };

    const salary = this.props.job_salary.map(item => {
      return { value: item.id, label: item.name };
    });

    salary.unshift({ value: "", label: "Tất cả mức lương" });

    // const province =
    //   typeof this.props.filterbyprovince !== "undefined"
    //     ? this.props.filterbyprovince.map(item => {
    //         return { value: item.id, label: item.name };
    //       })
    //     : [];

    const province = [
      { value: 74, label: "Bình Dương" },
      {
        value: 75,
        label: "Đồng Nai"
      },
      {
        value: 79,
        label: "Sài Gòn"
      },
      {
        value: 80,
        label: "Long An"
      },
      {
        value: 82,
        label: "Tiền Giang"
      },
      {
        value: 77,
        label: "Vũng Tàu"
      },
      {
        value: 86,
        label: "Vĩnh Long"
      },
      {
        value: 92,
        label: "Cần Thơ"
      }
    ];

    province.unshift({ value: "", label: "Tất cả tỉnh thành" });

    const countJob =
      typeof this.props.countJobHome !== "undefined"
        ? this.props.countJobHome.total
        : "";

    return (
      <section style={bannerStyle} className="banner">
        {/* <div className="slider-company">
          <SliderBanner />
        </div> */}
        <div className="container form-wrapper">
          {/* <h1>Cổng thông tin việc làm hàng đầu khu vực phía Nam</h1> */}
          <div className="row">
            <div className="col-md-12">
              <form
                className="form-inline"
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
                <div className="form-group keyword">
                  <input
                    type="text"
                    name="keywords"
                    value={this.state.selectKeyWord}
                    onChange={this.updateKeyWordValue}
                    className="form-control search-keyword"
                    placeholder="Nhập tên công việc..."
                  />
                </div>
                <div className="form-group keyword">
                  <Select
                    name="province_id"
                    value={this.state.selectLocationValue}
                    onChange={this.updateLocationValue}
                    options={province}
                    clearable={false}
                    noResultsText="Không tìm thấy kết quả phù hợp"
                    placeholder={"Tỉnh thành..."}
                  />
                </div>
                <div className="form-group keyword">
                  <Select
                    name="salary_id"
                    value={this.state.selectSalaryValue}
                    onChange={this.updateSalaryValue}
                    options={salary}
                    clearable={false}
                    noResultsText="Không tìm thấy kết quả phù hợp"
                    placeholder="Mức lương..."
                  />
                </div>
                <div className="input-group">
                  <i className="fa fa-search" />
                  <input
                    onClick={e => this.chooseClick(e)}
                    type="submit"
                    value="Tìm kiếm"
                  />
                </div>
              </form>
            </div>
          </div>
          {/* <div className="search-category">
            <p className="count_job">
              Có <b>{countJob}</b> công việc đang chờ bạn
            </p>
          </div> */}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  job_salary: state.job_salary.data.data
  // ,
  // filterbyprovince: state.filterbyprovince.data.data
  // ,
  // countJobHome: state.countJobHome.data.pagination
});

export default connect(mapStateToProps)(SearchBar);
