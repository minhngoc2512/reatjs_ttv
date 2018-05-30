import { Component } from "react";
import { object } from "prop-types";
import CategoryMainSide from "../../components/CategoryMainSide";
import CategorySideBar from "../../components/CategorySideBar";
import { asyncConnect } from "redux-connect";
import { connect } from "react-redux";
import { loadJobCategory } from "./../../redux/modules/loadjobcategory/actions";
import { push } from "react-router-redux";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import { loadCategorySummary } from "./../../redux/modules/categorysummary/actions";
import slug from "slug";

export class Industrial extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { history } = context;

    const { store } = context.store;

    const query = this.props.location.query;

    const provinceSlugPattern = {};
    this.props.taxonomy.data.forEach(item => {
      if (item.taxonomy_type === "province") {
        provinceSlugPattern[item.slug] = item.taxonomy_id;
      }
    });

    const industrialSlugPattern = {};
    this.props.taxonomy.data.forEach(item => {
      if (item.taxonomy_type === "industrial_zone") {
        industrialSlugPattern[item.slug] = item.taxonomy_id;
      }
    });

    if (
      provinceSlugPattern[this.props.params.parent] &&
      industrialSlugPattern[this.props.params.child]
    ) {
      this.state = {
        category_type: "industrial_zone",
        province_id:
          query.province_id || provinceSlugPattern[this.props.params.parent],
        industrial_zone_id:
          query.industrial_zone_id ||
          industrialSlugPattern[this.props.params.child],
        carrer_id: "",
        salary_id: "",
        position_id: "",
        sort: "created_at",
        page: query.page || 1
      };
    } else if (industrialSlugPattern[this.props.params.child]) {
      this.state = {
        category_type: "industrial_zone",
        province_id: query.province_id || "",
        industrial_zone_id:
          query.industrial_zone_id ||
          industrialSlugPattern[this.props.params.child],
        carrer_id: "",
        salary_id: "",
        position_id: "",
        sort: "created_at",
        page: query.page || 1
      };
    } else if (provinceSlugPattern[this.props.params.parent]) {
      this.state = {
        category_type: "industrial_zone",
        province_id: query.province_id || "",
        industrial_zone_id: query.industrial_zone_id || "",
        carrer_id: "",
        salary_id: "",
        position_id: "",
        sort: "created_at",
        page: query.page || 1
      };
    }
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
        this.state.page
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
        page
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

    this.setState({
      province_id: province_id.toString(),
      salary_id: salary_id.toString(),
      key_word: key
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

    if (search !== "") {
      this.context.store.dispatch(
        push(
          "/" + "tim-kiem/viec-lam-" + search.substring(0, search.length - 1)
        )
      );
    } else {
      this.context.store.dispatch(push("/" + "tim-kiem/viec-lam"));
    }
  };

  render() {
    const category_type = this.state.category_type;
    const provinceId = this.state.province_id;
    const industrialZoneId = this.state.industrial_zone_id;
    const carrerId = this.state.carrer_id;
    const salaryId = this.state.salary_id;
    const positionId = this.state.position_id;

    return (
      <div>
        <section className="category">
          <div className="container form-wrapper">
            <h2>Hàng Ngàn Công Việc Mới Đang Chờ Bạn</h2>
            <span>Cổng thông tin việc làm hàng đầu khu vực phía Nam</span>
          </div>
        </section>
        <SearchBarNotIndex updateSearch={this.updateSearch} />
        <section className="search-result">
          <div className="container">
            <div className="row">
              <CategorySideBar
                params={this.props.params}
                category_type={category_type}
                updateStateFilter={this.updateStateFilter}
                provinceId={provinceId}
                industrialZoneId={industrialZoneId}
                carrerId={carrerId}
                salaryId={salaryId}
                positionId={positionId}
                filterbyindustrial={this.props.filterbyindustrial}
              />
              <CategoryMainSide
                category_type={category_type}
                params={this.props.params}
                updateSortPageCategory={this.updateSortPageCategory}
                page={this.state.page}
                sort={this.state.sort}
                categorysummary={this.props.categorysummary}
                provinceId={provinceId}
                industrialZoneId={industrialZoneId}
                carrerId={carrerId}
                salaryId={salaryId}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy.data,
    salary: state.job_salary.data,
    province: state.province.data
  };
};
export default connect(mapStateToProps)(Industrial);
