import { Component } from "react";
import { object } from "prop-types";
import CategoryMainSide from "../../components/CategoryMainSide";
import CategorySideBar from "../../components/CategorySideBar";
import { asyncConnect } from "redux-connect";
import { connect } from "react-redux";
import { loadJobCategory } from "./../../redux/modules/loadjobcategory/actions";
import { push } from "react-router-redux";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";

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

    if (provinceSlugPattern[this.props.params.parent]) {
      this.state = {
        category_type: "industrial_zone",
        province_id:
          query.province_id || provinceSlugPattern[this.props.params.parent],
        industrial_zone_id:
          query.industrial_zone_id ||
          industrialSlugPattern[this.props.params.child],
        carrer_id: query.carrer_id || "",
        salary_id: query.salary_id || "",
        position_id: query.position_id || "",
        sort: "created_at",
        page: query.page || 1
      };
      this.context.store.dispatch(
        loadJobCategory(
          provinceSlugPattern[this.props.params.parent],
          industrialSlugPattern[this.props.params.child],
          this.state.carrer_id,
          this.state.salary_id,
          this.state.position_id,
          this.state.sort,
          this.state.page
        )
      );
    } else if (industrialSlugPattern[this.props.params.child]) {
      this.state = {
        category_type: "industrial_zone",
        province_id: query.province_id || "",
        industrial_zone_id:
          query.industrial_zone_id ||
          industrialSlugPattern[this.props.params.child],
        carrer_id: query.carrer_id || "",
        salary_id: query.salary_id || "",
        position_id: query.position_id || "",
        sort: "created_at",
        page: query.page || 1
      };
      this.context.store.dispatch(
        loadJobCategory(
          this.state.province_id,
          industrialSlugPattern[this.props.params.child],
          this.state.carrer_id,
          this.state.salary_id,
          this.state.position_id,
          this.state.sort,
          this.state.page
        )
      );
    }
  }

  updateStateFilter = (
    province_id,
    industrial_id,
    carrer_id,
    salary_id,
    position_id
  ) => {
    const provinces = province_id !== null ? province_id : "";
    const industrials = industrial_id !== null ? industrial_id : "";
    const carrers = carrer_id !== null ? carrer_id : "";
    const salary = salary_id !== null ? salary_id : "";
    const position = position_id !== null ? position_id : "";
    this.setState({
      province_id: provinces,
      industrial_zone_id: industrials,
      carrer_id: carrers,
      salary_id: salary,
      position_id: position
    });

    const search =
      "?" +
      (carrer_id !== "" ? "carrer_id=" + carrer_id + "&" : "") +
      (salary_id !== "" ? "salary_id=" + salary_id + "&" : "") +
      (position_id !== "" ? "position_id=" + position_id + "&" : "");

    if (this.state.page !== 1) {
      this.context.store.dispatch(
        push(
          "/" +
            this.props.params.parent +
            "/" +
            this.props.params.child +
            +search.substring(0, search.length - 1) +
            "&page=" +
            this.state.page
        )
      );
    } else {
      this.context.store.dispatch(
        push(
          "/" +
            this.props.params.parent +
            "/" +
            this.props.params.child +
            search.substring(0, search.length - 1)
        )
      );
    }

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

    const search =
      "?" +
      (this.state.carrer_id !== ""
        ? "carrer_id=" + this.state.carrer_id + "&"
        : "") +
      (this.state.salary_id !== ""
        ? "salary_id=" + this.state.salary_id + "&"
        : "") +
      (this.state.position_id !== ""
        ? "position_id=" + this.state.position_id + "&"
        : "");

    if (page !== 1) {
      if (search.length > 5) {
        this.context.store.dispatch(
          push(
            "/" +
              this.props.params.parent +
              "/" +
              this.props.params.child +
              search.substring(0, search.length - 1) +
              "&page=" +
              page
          )
        );
      } else {
        this.context.store.dispatch(
          push(
            "/" +
              this.props.params.parent +
              "/" +
              this.props.params.child +
              "?page=" +
              page
          )
        );
      }
    } else {
      this.context.store.dispatch(
        push(
          "/" +
            this.props.params.parent +
            "/" +
            this.props.params.child +
            search.substring(0, search.length - 1)
        )
      );
    }

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

  //

  render() {
    const category_type = this.state.category_type;
    const provinceId = this.state.province_id;
    const industrialZoneId = this.state.industrial_zone_id;
    const carrerId = this.state.carrer_id;
    const salaryId = this.state.salary_id;
    const positionId = this.state.position_id;

    return (
      <main>
        <section className="category">
          <div className="container form-wrapper">
            <h2>Hàng Ngàn Công Việc Mới Đang Chờ Bạn</h2>
            <span>Cổng thông tin việc làm hàng đầu khu vực phía Nam</span>
          </div>
        </section>
        <SearchBarNotIndex />
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
              />
              <CategoryMainSide
                loadjobcategory={this.props.loadjobcategory}
                category_type={this.state.category_type}
                params={this.props.params}
                updateSortPageCategory={this.updateSortPageCategory}
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
    loadjobcategory: state.loadjobcategory,
    taxonomy: state.taxonomy.data
  };
};
export default connect(mapStateToProps)(Industrial);
