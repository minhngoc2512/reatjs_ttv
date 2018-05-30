import { Component } from "react";
import { object } from "prop-types";
import JobSummary from "../../components/JobSummary";
import JobMain from "../../components/JobMain";
import JobSimilarJobPost from "../../components/JobSimilarJobPost";
import JobSimilarIndustrialZone from "../../components/JobSimilarIndustrialZone";
import JobAds01 from "../../components/JobAds01";
import { connect } from "react-redux";
import { asyncConnect } from "redux-connect";
import { loadJobInCompany } from "./../../redux/modules/jobInCompany/actions";
import { loadDetail } from "./../../redux/modules/jobDetail/actions";
import NotFound from "../NotFound";
import { loadJobSimilarJobPost } from "./../../redux/modules/jobSimilarJobPost/actions";
import { loadJobSimilarIndustrialZone } from "./../../redux/modules/jobSimilarIndustrialZone/actions";
import { push } from "react-router-redux";
import Helmet from "react-helmet";
import JobListLoading from "../../components/JobListLoading";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import { loadFilterByProvince } from "./../../redux/modules/filterbyprovince/actions";
import { loadFilterByJobCarrer } from "./../../redux/modules/filterbyjobcarrer/actions";
import slug from "slug";

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
    key: "province",
    promise: ({ store, params }) => store.dispatch(loadFilterByProvince())
  },
  {
    key: "job_carrer",
    promise: ({ store, params }) => store.dispatch(loadFilterByJobCarrer(40))
  }
])
class Detail extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  constructor(props, context) {
    super(props, context);

    const { history } = context;
    const { store } = context.store;
    this.state = {
      title_job_similar: ""
    };
    if (typeof this.props.params.post !== "undefined") {
      if (this.props.JobDetail.data.length === 0) {
        return this.context.store.dispatch(push("/notfound"));
      }
    }
    this.checkJobPost = this.checkJobPost.bind(this);
    if (this.checkJobPost() === true) {
      const taxonomy = this.props.taxonomy.data;
      const industrialSlug = {};
      taxonomy.forEach(item => {
        if (item.taxonomy_type === "industrial_zone") {
          industrialSlug[item.taxonomy_id] = item.slug;
        }
      });
      const provinceSlug = {};
      taxonomy.forEach(item => {
        if (
          item.taxonomy_type === "province" &&
          item.slug.indexOf("-o-") >= 0
        ) {
          provinceSlug[item.taxonomy_id] = item.slug;
        }
      });
      const companySlug = {};
      taxonomy.forEach(item => {
        if (item.taxonomy_type === "company") {
          companySlug[item.taxonomy_id] = item.slug;
        }
      });
      this.checkUrl(
        this.props.params,
        provinceSlug,
        industrialSlug,
        companySlug,
        this.props.JobDetail.data[0],
        this.context.store
      );
      // if (this.props.JobDetail.data[0].company !== null) {
      this.context.store.dispatch(
        loadJobInCompany(this.props.JobDetail.data[0].company_id)
      );
      // }
      // if (this.props.JobDetail.data[0].job_position !== null) {
      let carrer_id = "";
      let forCount = 0;
      if (this.props.JobDetail.data[0].job_carrer) {
        this.props.JobDetail.data[0].job_carrer.forEach(item => {
          if (forCount === 0) {
            carrer_id = item.id;
            forCount++;
          } else {
            carrer_id = carrer_id + "," + item.id;
          }
        });
      }

      this.context.store.dispatch(
        loadJobSimilarJobPost(
          this.props.JobDetail.data[0].job_contact.province_id,
          carrer_id
        )
      );
      if (
        this.props.JobDetail.data[0].job_contact.industrial_zone_id !== null &&
        this.props.JobDetail.data[0].job_contact.industrial_zone_id !== 0
      ) {
        this.state = {
          title_job_similar: "KHU CÔNG NGHIỆP"
        };
        this.context.store.dispatch(
          loadJobSimilarIndustrialZone(
            "q[industrial_zone_id]=" +
              this.props.JobDetail.data[0].job_contact.industrial_zone_id
          )
        );
      } else {
        this.state = {
          title_job_similar: "TỈNH THÀNH"
        };
        this.context.store.dispatch(
          loadJobSimilarIndustrialZone(
            "q[province_id]=" +
              this.props.JobDetail.data[0].job_contact.province_id
          )
        );
      }
      // }
    } else {
      return this.context.store.dispatch(push("/notfound"));
    }
  }

  checkUrl(url, provinceSlug, industrialSlug, companySlug, JobDetail, store) {
    var editUrl = "";
    if (typeof url.post === "undefined") {
      if (url.parent !== provinceSlug[JobDetail.job_contact.province.id]) {
        editUrl =
          "/" +
          provinceSlug[JobDetail.job_contact.province.id] +
          "/" +
          url.child;
      }
    } else {
      if (url.parent != provinceSlug[JobDetail.job_contact.province.id]) {
        editUrl =
          "/" +
          provinceSlug[JobDetail.job_contact.province.id] +
          "/" +
          url.child +
          "/" +
          url.post;
      }
      if (
        JobDetail.job_contact.industrial_zone_id !== 0 ||
        JobDetail.job_contact.industrial_zone_id !== null
      ) {
        if (
          url.child !== industrialSlug[JobDetail.job_contact.industrial_zone_id]
        ) {
          editUrl =
            "/" +
            provinceSlug[JobDetail.job_contact.province.id] +
            "/" +
            industrialSlug[JobDetail.job_contact.industrial_zone_id] +
            "/" +
            url.post;
        }
      } else {
        if (url.child !== companySlug[JobDetail.company_id]) {
          editUrl =
            "/" +
            provinceSlug[JobDetail.job_contact.province.id] +
            "/" +
            url.post;
        }
      }
    }

    if (editUrl !== "") {
      store.dispatch(push(editUrl));
    }
  }
  checkJobPost() {
    if (typeof this.props.JobDetail.data[0] === "undefined") {
      return false;
    }
    return true;
  }

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
    const { l } = this.context.i18n;
    if (this.props.statusData.DETAIL.isLoaded === true) {
      if (this.props.JobDetail.data.length === 0) {
        // this.context.store.dispatch(push("/notfound"));
        return (
          <div>
            <NotFound />
          </div>
        );
      }
      const taxonomy = this.props.taxonomy.data;
      const industrialSlug = {};
      taxonomy.forEach(item => {
        if (item.taxonomy_type === "industrial_zone") {
          industrialSlug[item.taxonomy_id] = item.slug;
        }
      });
      const provinceSlug = {};
      taxonomy.forEach(item => {
        if (
          item.taxonomy_type === "province" &&
          item.slug.indexOf("-o-") >= 0
        ) {
          provinceSlug[item.taxonomy_id] = item.slug;
        }
      });
      const companySlug = {};
      taxonomy.forEach(item => {
        if (item.taxonomy_type === "company") {
          companySlug[item.taxonomy_id] = item.slug;
        }
      });
      const JobDetail = this.props.JobDetail.data[0];

      return (
        <main>
          <section className="category">
            <div className="container form-wrapper">
              <h2>Hàng Ngàn Công Việc Mới Đang Chờ Bạn</h2>
              <span>Đúng Người - Đúng Việc - Nhanh Chóng - Chính Xác</span>
            </div>
          </section>
          <SearchBarNotIndex updateSearch={this.updateSearch} />
          <Helmet title={JobDetail.job_title}>
            <meta name="description" content={JobDetail.job_title} />
            <meta property="og:title" content={JobDetail.job_title} />
            <meta property="og:description" content={JobDetail.job_title} />
            <meta property="og:url" content={this.props.location.pathname} />
            <meta property="og:type" content="article" />
          </Helmet>
          <div className="container-fluid page-background-1">
            <div className="container container-p-2">
              <JobSummary
                summary={JobDetail}
                params={this.props.params}
                provinceSlug={provinceSlug}
                industrialSlug={industrialSlug}
                companySlug={companySlug}
              />
              <JobMain
                detail={JobDetail}
                industrialSlug={industrialSlug}
                companySlug={companySlug}
                provinceSlug={provinceSlug}
              />
              {/* <JobSimilarJobPost
                industrialSlug={industrialSlug}
                provinceSlug={provinceSlug}
                companySlug={companySlug}
              /> */}
              <JobSimilarIndustrialZone
                industrialSlug={industrialSlug}
                provinceSlug={provinceSlug}
                companySlug={companySlug}
                title={this.state.title_job_similar}
              />
              {/* <JobAds01 /> */}
            </div>
          </div>
        </main>
      );
    } else if (this.props.statusData.DETAIL.isInProgress === true) {
      return (
        <div>
          <JobListLoading />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy.data,
    statusData: state.dataView,
    salary: state.job_salary.data,
    province: state.province.data
  };
};
export default connect(mapStateToProps)(Detail);
