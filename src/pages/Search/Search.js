import { Component } from "react";
import { object } from "prop-types";
import CategoryMainSide from "../../components/CategoryMainSide";
import CategorySideBar from "../../components/CategorySideBar";
import { asyncConnect } from "redux-connect";
import { connect } from "react-redux";
// import { loadJobCategory } from "./../../redux/modules/loadjobcategory/actions";
import { push } from "react-router-redux";
import { loadJobCategory } from "../../redux/modules/loadjobcategory/actions";
import JobListLoading from "../../components/JobListLoading";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import { loadFilterByIndustrial } from "./../../redux/modules/filterbyindustrial/actions";
import { loadFilterByJobCarrer } from "./../../redux/modules/filterbyjobcarrer/actions";
import { loadFilterByPosition } from "./../../redux/modules/filterbyposition/actions";
import { loadProvince } from "./../../redux/modules/province/actions";
import { loadCategorySummary } from "./../../redux/modules/categorysummary/actions";
import slug from "slug";

@asyncConnect([
  {
    key: "loadjobcategory",
    promise: ({ store, location, params }) => {
      const query = location.query;

      const provinces = store.getState()["province"]["data"]["data"];
      const checkExitProvince = {};
      provinces.forEach(item => {
        checkExitProvince[
          slug(item.name, {
            replacement: "-",
            lower: true
          })
        ] =
          item.id;
      });

      const salary = store.getState()["job_salary"]["data"]["data"];
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

      if (params.child.indexOf("viec-lam-") >= 0) {
        let url = params.child.substr(9);

        if (url.toString().split("+").length === 2) {
          const key = {};
          url
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
        } else if (url.toString().split("+").length === 1) {
          const key = {};
          url
            .toString()
            .split("+")
            .forEach((item, index) => {
              key[index] = item;
            });

          //xay ra gom tu khoa hoac (luong or tinh)
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
      if (params.child === "viec-lam-luong-cao") {
        keySearch = "luong-cao";
      }

      let key = "";
      if (keySearch !== "moi-nhat" && keySearch !== "luong-cao") {
        key = keySearch;
      }
      let dispatchOption = {
        province_id: checkExitProvince[provinceSearch || ""]
          ? checkExitProvince[provinceSearch]
          : "",
        industrial_zone_id: "",
        carrer_id: "",
        salary_id: checkExitSalary[salarySearch || ""]
          ? checkExitSalary[salarySearch]
          : "",
        position_id: "",
        key_word: key.replace(/\-/g, " ") || "",
        sort: keySearch === "luong-cao" ? "job_salary_id" : "created_at",
        page: 1
      };

      return store.dispatch(
        loadJobCategory(
          dispatchOption.province_id,
          dispatchOption.industrial_zone_id,
          dispatchOption.carrer_id,
          dispatchOption.salary_id,
          dispatchOption.position_id,
          dispatchOption.sort,
          dispatchOption.page,
          dispatchOption.key_word
        )
      );
    }
  },
  {
    key: "filterbyindustrial",
    promise: ({ store, params }) => {
      return store.dispatch(loadFilterByIndustrial(""));
    }
  },
  {
    key: "filterbycarrer",
    promise: ({ store, params }) => {
      return store.dispatch(loadFilterByJobCarrer(12));
    }
  },
  {
    key: "filterbyposition",
    promise: ({ store, params }) => {
      return store.dispatch(loadFilterByPosition());
    }
  }
])
class Search extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { history } = context;

    const { store } = context.store;

    const query = this.props.location.query;
    this.updateSortPageCategory = this.updateSortPageCategory.bind(this);
    this.updateStateFilter = this.updateStateFilter.bind(this);

    const province = this.props.province.data;
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

    const salary = this.props.salary.data;
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
    let params = this.props.params;
    if (params.child.indexOf("viec-lam-") >= 0) {
      let url = params.child.substr(9);
      if (url.toString().split("+").length === 2) {
        const key = {};
        url
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
      } else if (url.toString().split("+").length === 1) {
        const key = {};
        url
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

    if (params.child === "viec-lam-luong-cao") {
      keySearch = "luong-cao";
    }

    let key = "";
    if (keySearch !== "moi-nhat" && keySearch !== "luong-cao") {
      key = keySearch;
    }

    this.state = {
      category_type: "search",
      province_id: checkProvince[provinceSearch || ""]
        ? checkProvince[provinceSearch]
        : "",
      industrial_zone_id: "",
      carrer_id: "",
      salary_id: checkExitSalary[salarySearch || ""]
        ? checkExitSalary[salarySearch]
        : "",
      position_id: "",
      key_word: key.replace(/\-/g, " ") || "",
      sort: keySearch === "luong-cao" ? "job_salary_id" : "created_at",
      page: 1
    };
  }

  updateStateFilter = (
    province_id,
    industrial_id,
    carrer_id,
    salary_id,
    position_id
  ) => {
    const provinces =
      province_id !== null ? province_id : this.state.province_id;
    const industrials =
      industrial_id !== null ? industrial_id : this.state.industrial_zone_id;
    const carrers = carrer_id !== null ? carrer_id : this.state.carrer_id;
    const salary = salary_id !== null ? salary_id : this.state.salary_id;
    const position =
      position_id !== null ? position_id : this.state.position_id;
    this.setState({
      province_id: provinces,
      industrial_zone_id: industrials,
      carrer_id: carrers,
      salary_id: salary,
      position_id: position
    });
    this.context.store.dispatch(
      loadJobCategory(
        provinces,
        industrials,
        carrers,
        salary,
        position_id,
        this.state.sort,
        this.state.page,
        this.state.key_word
      )
    );
  };

  updateSortPageCategory = (sort, page) => {
    this.setState({
      sort: sort,
      page: page
    });

    this.context.store.dispatch(
      loadJobCategory(
        this.state.province_id,
        this.state.industrial_zone_id,
        this.state.carrer_id,
        this.state.salary_id,
        this.state.position_id,
        sort,
        page,
        this.state.key_word
      )
    );
  };

  updateSearch = (key, province_id, salary_id) => {
    const jobSalary = {};
    this.props.salary.data.forEach(item => {
      jobSalary[item.id] = slug(item.name, {
        replacement: "-",
        lower: true
      });
    });

    const province = {};
    this.props.province.data.forEach(item => {
      province[item.id] = slug(item.name, {
        replacement: "-",
        lower: true
      });
    });

    const provinces = province_id !== "" ? province[province_id] : "";
    const salary = salary_id !== "" ? jobSalary[salary_id] : "";
    const key_word =
      key !== ""
        ? slug(key, {
            replacement: "-",
            lower: true
          })
        : "";

    const search =
      (key_word !== "" ? key_word + "+" : "") +
      (provinces !== "" ? "tai-" + provinces + "-" : "") +
      (salary !== "" ? "luong-" + salary + "-" : "");

    this.setState({
      province_id: province_id,
      salary_id: salary_id,
      key_word: key,
      carrer_id: "",
      position_id: ""
    });

    if (search !== "") {
      this.context.store.dispatch(
        push(
          "/" + "tim-kiem/viec-lam-" + search.substring(0, search.length - 1)
        )
      );
    }
  };

  render() {
    return (
      <main>
        <section className="category">
          <div className="container form-wrapper">
            <h2> Hàng Ngàn Công Việc Mới Đang Chờ Bạn </h2>
            <span>Cổng thông tin việc làm hàng đầu khu vực phía Nam</span>
          </div>
        </section>
        <SearchBarNotIndex
          updateSearch={this.updateSearch}
          type={this.state.category_type}
          params={this.props.params}
        />
        <section className="search-result">
          <div className="container">
            <div className="row">
              <CategorySideBar
                params={this.props.params}
                category_type={this.state.category_type}
                updateStateFilter={this.updateStateFilter}
                provinceId={this.state.province_id}
                industrialZoneId={this.state.industrial_zone_id}
                carrerId={this.state.carrer_id}
                salaryId={this.state.salary_id}
                positionId={this.state.position_id}
              />

              <CategoryMainSide
                params={this.props.params}
                category_type={this.state.category_type}
                updateSortPageCategory={this.updateSortPageCategory}
                provinceId={this.state.province_id}
                industrialZoneId={this.state.industrial_zone_id}
                carrerId={this.state.carrer_id}
                salaryId={this.state.salary_id}
                keyWord={this.state.key_word}
                page={this.state.page}
                sort={this.state.sort}
              />
            </div>
          </div>
        </section>
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy.data,
    dataView: state.dataView,
    salary: state.job_salary.data,
    province: state.province.data
  };
};
export default connect(mapStateToProps)(Search);
