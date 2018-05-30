import { Component } from "react";
import { object } from "prop-types";
import HomeIndex from "../../components/HomeIndex";
import TopIndustrialZone from "../../components/TopIndustrialZone";
import MobileAppLandingPage from "../../components/MobileAppLandingPage";
import { asyncConnect } from "redux-connect";
import { connect } from "react-redux";
import { loadProvinces } from "./../../redux/modules/provinceindustrial/actions";
import { loadJobList } from "./../../redux/modules/JobList/actions";
import { loadJobListNew } from "./../../redux/modules/JobListNew/actions";
import { loadTopIndusTrialZone } from "./../../redux/modules/topindustrialzone/actions";
import { loadFilterByJobCarrer } from "./../../redux/modules/filterbyjobcarrer/actions";
import SearchBar from "../../components/SearchBar";
import SliderHome from "./../../components/SliderHome";
import { push } from "react-router-redux";
import slug from "slug";

@asyncConnect([
  {
    key: "joblistfeature",
    promise: ({ store }) => store.dispatch(loadJobList(1))
  },
  {
    key: "provinces",
    promise: ({ store }) => store.dispatch(loadProvinces())
  },
  {
    key: "joblistnew",
    promise: ({ store }) => store.dispatch(loadJobListNew(1))
  },
  {
    key: "topindustrialzone",
    promise: ({ store }) => store.dispatch(loadTopIndusTrialZone(1))
  },
  {
    key: "filterbycarrer",
    promise: ({ store }) => store.dispatch(loadFilterByJobCarrer(50))
  }
])
export class Home extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { history } = context;

    const { store } = context.store;

    this.state = {
      pageHot: 1,
      pageNew: 1,
      pageIndus: 1
    };
  }

  updateSearch = (key, province_id, salary_id) => {
    const jobSalary = {};
    this.props.salary.forEach(item => {
      jobSalary[item.id] = slug(item.name, {
        replacement: "-",
        lower: true
      });
    });

    const province = {};
    this.props.province.forEach(item => {
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

    if (search !== "") {
      this.context.store.dispatch(
        push(
          "/" + "tim-kiem/viec-lam-" + search.substring(0, search.length - 1)
        )
      );
    } else {
      this.context.store.dispatch(push("/" + "tim-kiem/viec-lam"));
    }

    // const search =
    //   "?" +
    //   (key !== "" ? "key=" + key_word + "&" : "") +
    //   (provinces !== "" ? "province=" + provinces + "&" : "") +
    //   (salary !== "" ? "salary=" + salary + "&" : "");
    // this.context.store.dispatch(
    //   push("/" + "tim-viec" + search.substring(0, search.length - 1))
    // );
  };

  updatePage = (page, type) => {
    if (type === "pageHot") {
      this.setState({
        pageHot: page
      });
      this.context.store.dispatch(loadJobList(page));
    } else if (type === "pageNew") {
      this.setState({
        pageNew: page
      });
      this.context.store.dispatch(loadJobListNew(page));
    } else if (type === "pageIndus") {
      this.setState({
        pageIndus: page
      });
      this.context.store.dispatch(loadTopIndusTrialZone(page));
    }
  };

  render() {
    const { l } = this.context.i18n;
    const page = {
      pageHot: this.state.pageHot,
      pageNew: this.state.pageNew,
      pageIndus: this.state.pageIndus
    };

    return (
      <div>
        <SearchBar updateSearch={this.updateSearch} />
        {/* <section className="slide_home">
          <div className="client-slider">
            <div className="container">
              <SliderHome />
            </div>
          </div>
        </section> */}
        <HomeIndex updatePage={this.updatePage} page={page} />
        <TopIndustrialZone
          taxonomy={this.props.taxonomy}
          provinces={this.props.provinces}
        />
        <MobileAppLandingPage />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy,
    provinces: state.provinces.data,
    salary: state.job_salary.data.data,
    province: state.province.data.data
  };
};

export default connect(mapStateToProps)(Home);
