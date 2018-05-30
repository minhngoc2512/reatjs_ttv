import { Component } from "react";
import { connect } from "react-redux";
import { object, shape, func } from "prop-types";
import Industrial from "../Industrial";
import Company from "../Company";
import NotFound from "../NotFound";
import { asyncConnect } from "redux-connect";
import Detail from "../Detail";
import { loadDetail } from "./../../redux/modules/jobDetail/actions";
import JobListLoading from "../../components/JobListLoading";
import { loadFilterByJobCarrer } from "./../../redux/modules/filterbyjobcarrer/actions";
import { push } from "react-router-redux";
import { loadCategorySummary } from "./../../redux/modules/categorysummary/actions";
import { loadJobCategory } from "./../../redux/modules/loadjobcategory/actions";
import { loadFilterByIndustrial } from "./../../redux/modules/filterbyindustrial/actions";
import { loadInfomationCompany } from "../../redux/modules/infomationCompany/actions";
import { loadFilterByPosition } from "./../../redux/modules/filterbyposition/actions";

@asyncConnect([
  {
    key: "JobDetail",
    promise: ({ store, params }) =>
      store.dispatch(
        loadDetail(
          typeof params.post !== "undefined"
            ? params.post.substring(0, params.post.length - 5)
            : params.child.substring(0, params.child.length - 5)
        )
      )
  },
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
        province_id:
          query.province_id && checkExitTaxonomy[query.province_id || ""]
            ? query.province_id
            : "",
        industrial_zone_id:
          query.industrial_zone_id &&
          checkExitTaxonomy[query.industrial_zone_id || ""]
            ? query.industrial_zone_id
            : "",
        carrer_id: "",
        salary_id: "",
        position_id: "",
        sort: "created_at",
        page: (query.page && Number.isInteger(query.page)) || 1
      };

      // check kieu cua slug

      let parent = "";
      taxonomy.map(function(item) {
        if (item.slug === params.parent) {
          parent = item;
        }
      });

      let child = "";
      taxonomy.map(function(item) {
        if (item.slug === params.child) {
          child = item;
        }
      });

      if (
        parent.taxonomy_type == "province" &&
        child.taxonomy_type == "industrial_zone"
      ) {
        dispatchOption["province_id"] = parent.taxonomy_id;
        dispatchOption["industrial_zone_id"] = child.taxonomy_id;
      } else {
        dispatchOption["industrial_zone_id"] = child.taxonomy_id;
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
      return store.dispatch(loadCategorySummary(params.child));
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
        return store.dispatch(loadFilterByIndustrial(""));
      } else {
        return store.dispatch(loadFilterByIndustrial(match.taxonomy_id));
      }
    }
  },
  {
    key: "information",
    promise: ({ store, location, params }) => {
      if (typeof params.child === "undefined") {
        return [];
      }
      const query = location.query;
      const taxonomy = store.getState()["taxonomy"]["data"]["data"];
      const companySlug = {};
      taxonomy.forEach(item => {
        if (item.taxonomy_type === "company") {
          companySlug[item.slug] = item.taxonomy_id;
        }
      });
      const companybId = companySlug[params.child];
      if (typeof companybId === "undefined") {
        return [];
      }
      return store.dispatch(loadInfomationCompany(companybId));
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
class SwitchComponent extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const taxonomy = this.props.taxonomy.data;
    const industrialSlug = {};
    taxonomy.forEach(item => {
      if (item.taxonomy_type === "industrial_zone") {
        industrialSlug[item.slug] = item.taxonomy_id;
      }
    });
    const companySlug = {};
    taxonomy.forEach(item => {
      if (item.taxonomy_type === "company") {
        companySlug[item.slug] = item.taxonomy_id;
      }
    });
    const provinceSlug = {};
    taxonomy.forEach(item => {
      if (item.taxonomy_type === "province") {
        provinceSlug[item.slug] = item.taxonomy_id;
      }
    });
    const companybId = companySlug[this.props.params.child];
    const provinceId = provinceSlug[this.props.params.parent];
    const industrialId = industrialSlug[this.props.params.child];
    const store = this.context.store;
    if (this.props.params.child.indexOf(".html") !== -1) {
      if (this.props.statusDetail.isLoaded === true) {
        if (this.props.JobDetail.length !== 0) {
          return (
            <Detail
              params={this.props.params}
              JobDetail={this.props.JobDetail}
              location={this.props.location}
            />
          );
        } else {
          this.context.store.dispatch(push("/notfound"));
          return (
            <div>
              return <NotFound />;
            </div>
          );
        }
      } else if (this.props.statusDetail.isInProgress === true) {
        return (
          <div>
            <JobListLoading />
          </div>
        );
      }
    } else if (typeof provinceId === "undefined") {
      this.context.store.dispatch(push("/notfound"));
      return <NotFound />;
    } else if (typeof companybId !== "undefined") {
      return (
        <Company
          params={this.props.params}
          location={this.props.location}
          companybId={companybId}
          provinceId={provinceId}
        />
      );
    } else if (typeof industrialId !== "undefined") {
      return (
        <Industrial
          params={this.props.params}
          location={this.props.location}
          loadjobcategory={this.props.loadjobcategory}
          categorysummary={this.props.categorysummary}
          filterbyindustrial={this.props.filterbyindustrial}
        />
      );
    } else {
      this.context.store.dispatch(push("/notfound"));
      return <NotFound />;
    }
  }
}
const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy.data,
    statusDetail: state.dataView.DETAIL
  };
};
export default connect(mapStateToProps)(SwitchComponent);
