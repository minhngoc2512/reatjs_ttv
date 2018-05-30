import { Component } from "react";
import { object } from "prop-types";
import CategoryMainSide from "../../components/CategoryMainSide";
import CategorySideBar from "../../components/CategorySideBar";
import { asyncConnect } from "redux-connect";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import NotFound from "../NotFound";
import { loadCategorySummary } from "./../../redux/modules/categorysummary/actions";
import { loadJobCategory } from "./../../redux/modules/loadjobcategory/actions";
import { loadFilterByIndustrial } from "./../../redux/modules/filterbyindustrial/actions";
import { loadFilterByJobCarrer } from "./../../redux/modules/filterbyjobcarrer/actions";
import { loadFilterByPosition } from "./../../redux/modules/filterbyposition/actions";
import slug from "slug";

@asyncConnect([
  {
    key: "loadjobcategory",
    promise: ({ store, location, params }) => {
      const query = location.query;

      const taxonomy = store.getState()["taxonomy"]["data"]["data"];
      const checkExitTaxonomy = {};
      taxonomy.forEach(item => {
        checkExitTaxonomy[item.taxonomy_id] = item.slug;
      });

      const salary = store.getState()["job_salary"]["data"]["data"];
      const checkExitSalary = {};
      salary.forEach(item => {
        checkExitSalary[item.id] = item.name;
      });

      let dispatchOption = {
        province_id: "",
        industrial_zone_id: "",
        carrer_id: "",
        salary_id: "",
        position_id: "",
        sort: "created_at",
        page: (query.page && Number.isInteger(query.page)) || 1
      };

      // check kieu cua slug

      let match = "";
      taxonomy.map(function(item) {
        if (item.slug === params.parent) {
          match = item;
        }
      });

      if (match.taxonomy_type == "province") {
        dispatchOption["province_id"] = match.taxonomy_id;
      } else if (match.taxonomy_type == "carrer") {
        dispatchOption["carrer_id"] = match.taxonomy_id;
      } else if (match.taxonomy_type == "industrial_zone") {
        dispatchOption["industrial_zone_id"] = match.taxonomy_id;
      }

      return store.dispatch(
        loadJobCategory(
          dispatchOption.province_id,
          dispatchOption.industrial_zone_id,
          dispatchOption.carrer_id,
          dispatchOption.salary_id,
          dispatchOption.position_id,
          dispatchOption.sort,
          dispatchOption.page
        )
      );
    }
  },
  {
    key: "categorysummary",
    promise: ({ store, params }) => {
      return store.dispatch(loadCategorySummary(params.parent));
    }
  },
  {
    key: "filterbyindustrial",
    promise: ({ store, params }) => {
      // check kieu cua slug
      let taxonomy = store.getState()["taxonomy"]["data"]["data"];

      let match = "";
      taxonomy.map(function(item) {
        if (item.slug === params.parent) {
          match = item;
        }
      });
      if (match.taxonomy_type == "carrer") {
        return store.dispatch(loadFilterByIndustrial());
      } else {
        return store.dispatch(loadFilterByIndustrial(match.taxonomy_id));
      }
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
export class Category extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { history } = context;

    const { store } = context.store;

    // this.context.store.dispatch(push("/vieclamnambo"));

    const query = this.props.location.query;

    const category_type = context.category_type;

    let match = "";
    const slug = this.props.params.parent;
    this.props.taxonomy.data.map(function(item) {
      if (item.slug === slug) {
        match = item;
      }
    });

    const taxonomy = this.props.taxonomy.data;
    const checkExitTaxonomy = {};
    taxonomy.forEach(item => {
      checkExitTaxonomy[item.taxonomy_id] = item.slug;
    });

    const salary = this.props.salary.data;
    const checkExitSalary = {};
    salary.forEach(item => {
      checkExitSalary[item.id] = item.name;
    });

    if (match.taxonomy_type == "province") {
      this.state = {
        category_type: "province",
        province_id: match.taxonomy_id || "",
        industrial_zone_id: "",
        carrer_id: "",
        salary_id: "",
        position_id: "",
        sort: "created_at",
        page: (query.page && Number.isInteger(query.page)) || 1
      };
    } else if (match.taxonomy_type == "carrer") {
      this.state = {
        category_type: "carrer",
        province_id: "",
        industrial_zone_id: "",
        carrer_id: match.taxonomy_id || "",
        salary_id: "",
        position_id: "",
        sort: "created_at",
        page: (query.page && Number.isInteger(query.page)) || 1
      };
    } else if (match.taxonomy_type == "industrial_zone") {
      this.state = {
        category_type: "industrial_zone",
        province_id: "",
        industrial_zone_id: match.taxonomy_id || "",
        carrer_id: "",
        salary_id: "",
        position_id: "",
        sort: "created_at",
        page: (query.page && Number.isInteger(query.page)) || 1
      };
    } else if (match === "") {
      this.state = {
        category_type: "carrer",
        province_id: "",
        industrial_zone_id: "",
        carrer_id: "",
        salary_id: "",
        position_id: "",
        sort: "created_at",
        page: (query.page && Number.isInteger(query.page)) || 1
      };
      return this.context.store.dispatch(push("/tim-kiem"));
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
                category_type={this.state.category_type}
                updateStateFilter={this.updateStateFilter}
                provinceId={this.state.province_id}
                industrialZoneId={this.state.industrial_zone_id}
                carrerId={this.state.carrer_id}
                salaryId={this.state.salary_id}
                positionId={this.state.position_id}
              />
              <CategoryMainSide
                category_type={this.state.category_type}
                params={this.props.params}
                updateSortPageCategory={this.updateSortPageCategory}
                categorysummary={this.props.categorysummary}
                provinceId={this.state.province_id}
                industrialZoneId={this.state.industrial_zone_id}
                carrerId={this.state.carrer_id}
                salaryId={this.state.salary_id}
                page={this.state.page}
                sort={this.state.sort}
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
export default connect(mapStateToProps)(Category);
