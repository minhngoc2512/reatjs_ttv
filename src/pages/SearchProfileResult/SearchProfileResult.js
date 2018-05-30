import { Component } from "react";
import { object } from "prop-types";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import SearchProfileIndex from "../../components/SearchProfileIndex";
import SearchProfileResultIndex from "../../components/SearchProfileResultIndex";
import { asyncConnect } from "redux-connect";
import { connect } from "react-redux";
import { loadFilterByJobCarrer } from "./../../redux/modules/filterbyjobcarrer/actions";
import { loadFilterByPosition } from "../../redux/modules/filterbyposition/actions";
import { loadJobExperience } from "../../redux/modules/jobExperience/actions";
import { loadJobType } from "./../../redux/modules/jobType/actions";
import { loadJobBenefit } from "./../../redux/modules/jobBenefit/actions";
import { loadFilterByProvince } from "./../../redux/modules/filterbyprovince/actions";

@asyncConnect([
  {
    key: "job_carrer",
    promise: ({ store, params }) => store.dispatch(loadFilterByJobCarrer(999))
  },
  {
    key: "position",
    promise: ({ store, params }) => store.dispatch(loadFilterByPosition())
  },
  {
    key: "experience",
    promise: ({ store, params }) => store.dispatch(loadJobExperience())
  },
  {
    key: "job_type",
    promise: ({ store, params }) => store.dispatch(loadJobType())
  },
  {
    key: "job_benefit",
    promise: ({ store, params }) => store.dispatch(loadJobBenefit())
  },
  {
    key: "province",
    promise: ({ store, params }) => store.dispatch(loadFilterByProvince())
  }
])
class SearchProfileResult extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <main>
        <section className="category">
          <div className="container form-wrapper">
            <h2>Hàng Ngàn Công Việc Mới Đang Chờ Bạn</h2>
            <span>Đúng Người - Đúng Việc - Nhanh Chóng - Chính Xác</span>
          </div>
        </section>
        <SearchBarNotIndex />
        <div className="container-fluid page-background-1">
          <SearchProfileIndex
            job_carrer={this.props.job_carrer}
            experience={this.props.experience}
            job_type={this.props.job_type}
            job_salary={this.props.job_salary}
            province={this.props.province}
            position={this.props.position}
          />
          <SearchProfileResultIndex />
        </div>
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy.data,
    job_salary: state.job_salary.data.data
  };
};
export default connect(mapStateToProps)(SearchProfileResult);
