import { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { push } from "react-router-redux";
import { loadFilterByProvince } from "./../../redux/modules/filterbyprovince/actions";
import slug from "slug";

// import HomeCarousel from "../HomeCarousel";
class SearchBarNotIndex extends Component {
  static contextTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }),
    store: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    this.updateLocationValue = this.updateLocationValue.bind(this);
    this.updateSalaryValue = this.updateSalaryValue.bind(this);
    this.updateKeyWordValue = this.updateKeyWordValue.bind(this);

    const query = this.props.url.pathname;

    const province = this.props.province;
    const checkProvince = {};
    province.forEach(item => {
      checkProvince[
        slug(item.name, {
          replacement: "-",
          lower: true
        })
      ] =
        item.id;
    });

    const salary = this.props.job_salary;
    const checkExitSalary = {};
    salary.forEach(item => {
      checkExitSalary[
        slug(item.name, {
          replacement: "-",
          lower: true
        })
      ] =
        item.id;
    });

    let keySearch = "";
    let salarySearch = "";
    let provinceSearch = "";

    if (query.indexOf("/tim-kiem/viec-lam-") >= 0) {
      let params = query.replace("/tim-kiem/viec-lam-", "");
      if (params.toString().split("+").length === 2) {
        const key = {};
        params
          .toString()
          .split("+")
          .forEach((item, index) => {
            key[index] = item;
          });

        keySearch = key[0];

        if (key[1].toString().split("-luong-").length == 2) {
          // co ca 2
          const check = {};
          key[1]
            .toString()
            .split("-luong-")
            .forEach((item, index) => {
              check[index] = item;
            });
          salarySearch = check[1];
          provinceSearch = check[0].replace("tai-", "");
        } else {
          // co 1
          if (key[1].toString().split("luong-").length == 2) {
            // co salary ko province
            const checkSalary = {};
            key[1]
              .toString()
              .split("luong-")
              .forEach((item, index) => {
                checkSalary[index] = item;
              });
            salarySearch = checkSalary[1];
            provinceSearch = "";
          } else {
            // ko co salary co province
            salarySearch = "";
            provinceSearch = key[1].replace("tai-", "");
          }
        }
      } else if (params.toString().split("+").length === 1) {
        const key = {};
        params
          .toString()
          .split("+")
          .forEach((item, index) => {
            key[index] = item;
          });
        if (key[0].indexOf("luong") >= 0 || key[0].indexOf("tai") >= 0) {
          if (key[0].toString().split("-luong-").length == 2) {
            // co ca 2
            const check = {};
            key[0]
              .toString()
              .split("-luong-")
              .forEach((item, index) => {
                check[index] = item;
              });
            salarySearch = check[1];
            provinceSearch = check[0].replace("tai-", "");
          } else {
            // co 1
            if (key[0].toString().split("luong-").length == 2) {
              // co salary ko province
              const checkSalary = {};
              key[0]
                .toString()
                .split("luong-")
                .forEach((item, index) => {
                  checkSalary[index] = item;
                });
              salarySearch = checkSalary[1];
              provinceSearch = "";
            } else {
              // ko co salary co province
              salarySearch = "";
              provinceSearch = key[0].replace("tai-", "");
            }
          }
        } else {
          keySearch = key[0];
        }
      }
    }

    // this.context.store.dispatch(loadFilterByProvince());

    let key = "";
    if (keySearch !== "moi-nhat" && keySearch !== "luong-cao") {
      key = keySearch;
    }
    this.state = {
      selectKeyWord: key.replace(/\-/g, " ") || "",
      selectSalaryValue: checkExitSalary[salarySearch || ""]
        ? checkExitSalary[salarySearch]
        : "undefined",
      selectLocationValue: checkProvince[provinceSearch || ""]
        ? checkProvince[provinceSearch]
        : "undefined"
    };
  }

  updateLocationValue(newValue) {
    this.setState({
      selectLocationValue: newValue.value
    });
  }

  updateSalaryValue(newValue) {
    this.setState({
      selectSalaryValue: newValue.value
    });
  }
  updateKeyWordValue(newValue) {
    this.setState({
      selectKeyWord: newValue.target.value
    });
  }

  chooseClick = (e, data) => {
    this.props.updateSearch(
      this.state.selectKeyWord !== "undefined" ? this.state.selectKeyWord : "",
      this.state.selectLocationValue !== "undefined"
        ? this.state.selectLocationValue
        : "",
      this.state.selectSalaryValue !== "undefined"
        ? this.state.selectSalaryValue
        : ""
    );
  };

  render() {
    const salary = this.props.job_salary.map(item => {
      return {
        value: item.id,
        label: item.name
      };
    });
    salary.unshift({
      value: "",
      label: "Tất cả mức lương"
    });

    // const province =
    //   typeof this.props.filterbyprovince !== "undefined"
    //     ? this.props.filterbyprovince.map(item => {
    //         return {
    //           value: item.id,
    //           label: item.name
    //         };
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
    province.unshift({
      value: "",
      label: "Tất cả tỉnh thành"
    });

    return (
      <section className="inner-banner">
        <div className="container">
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
                </div>{" "}
                <div className="form-group keyword">
                  <Select
                    name="province_id"
                    value={this.state.selectLocationValue}
                    onChange={this.updateLocationValue}
                    options={province}
                    clearable={false}
                    noResultsText="Không tìm thấy kết quả phù hợp"
                    placeholder={"Tỉnh thành..."}
                  />{" "}
                </div>{" "}
                <div className="form-group keyword">
                  <Select
                    name="job_salary_id"
                    value={this.state.selectSalaryValue}
                    onChange={this.updateSalaryValue}
                    options={salary}
                    clearable={false}
                    noResultsText="Không tìm thấy kết quả phù hợp"
                    placeholder="Mức lương..."
                  />
                </div>{" "}
                <div className="input-group">
                  <i className="fa fa-search" />
                  <input
                    onClick={e => this.chooseClick(e)}
                    type="submit"
                    value="Tìm kiếm"
                  />
                </div>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  job_salary: state.job_salary.data.data,
  province: state.province.data.data,
  // filterbyprovince: state.filterbyprovince.data.data,
  url: state.routing.locationBeforeTransitions
});

export default connect(mapStateToProps)(SearchBarNotIndex);
