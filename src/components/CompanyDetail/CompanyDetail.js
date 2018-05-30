import { Component } from "react";
import { object } from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import JobListLoading from "../../components/JobListLoading";
class CompanyDetail extends Component {
  static contextTypes = {
    i18n: object
  };
  constructor(props) {
    super(props);
    let text = this.props.information.data[0].description;
    this.state = {
      companyDescription: text,
      companyDescriptionSort: text.slice(0, 150),
      showText: "...Xem thêm",
      statusShow: 1
    };
    this.showMore = this.showMore.bind(this);
  }
  showMore() {
    if (this.state.statusShow === 1) {
      this.setState({
        companyDescriptionSort: this.state.companyDescription,
        showText: "",
        statusShow: 0
      });
    }
    // else {
    //   this.setState({
    //     companyDescriptionSort: this.state.companyDescription.slice(0, 150),
    //     showText: "...Xem thêm",
    //     statusShow: 1
    //   });
    // }
  }
  render() {
    const { l } = this.context.i18n;
    // if (
    //   this.props.dataView.COMPANY.isLoaded === true &&
    //   this.props.dataView.COMPANY.isFailed === false
    // ) {
    if (
      this.props.status.INFOMATIONCOMPANY.isLoaded === true &&
      this.props.status.COMPANY.isLoaded === true
    ) {
      let jobCount = this.props.listJobCompany.pagination.total;
      const type = this.props.type;
      const information = this.props.information.data[0];
      const taxonomy = this.props.taxonomy.data;
      const logoCompany = logo => {
        if (logo === "") {
          let listLogo = [
            require("../../../static/images/1.png"),
            require("../../../static/images/2.png"),
            require("../../../static/images/3.png"),
            require("../../../static/images/4.png"),
            require("../../../static/images/5.png"),
            require("../../../static/images/6.png")
          ];
          let logoRandom =
            listLogo[Math.floor(Math.random() * listLogo.length)];
          return logoRandom;
        }
        return logo;
      };
      const website = website => {
        if (website !== "") {
          return "Website:" + information.website;
        }
      };

      const email = email => {
        if (email === "") {
          return "";
        }
        return "Email: " + information.contact_email;
      };

      return (
        <div className="row">
          <Helmet title={title}>
            <meta name="description" content={information.description} />
            <meta property="og:title" content={information.name} />
            <meta property="og:description" content={information.description} />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:type" content="article" />
          </Helmet>
          <div className="col-md-12 col-sm-12 content-topa text-center-content">
            <div className="col-md-2 col-sm-12">
              <center>
                <a title="" href="#">
                  <img
                    src={
                      typeof information !== "undefined"
                        ? logoCompany(information.logo)
                        : ""
                    }
                    className="img-content-top"
                  />
                </a>
              </center>
            </div>
            <div className="col-md-7">
              <a title="" href="#">
                <h1 className="title-content-top">{information.name}</h1>
              </a>
              <div className="text-company-parent">
                <div className="text-company">
                  Địa điểm: {information.address}
                </div>
                <div className="text-company">
                  {information.contact_phone !== ""
                    ? "Điện thoại: " + information.contact_phone
                    : ""}
                </div>
                <div className="text-company">
                  {website(
                    typeof information !== "undefined"
                      ? information.website
                      : ""
                  )}
                </div>
                <div className="text-company">
                  {email(
                    typeof information !== "undefined"
                      ? information.contact_email
                      : ""
                  )}
                </div>
              </div>
              <div className="row description-company">
                <div className=" xs-text-c col-md-12 col-sm-12 col-xs-12">
                  {this.state.companyDescriptionSort}
                  <span className="show-text-d-c" onClick={this.showMore}>
                    {this.state.companyDescription !== ""
                      ? this.state.showText
                      : ""}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 ">
              <div className="content-button count-job-company">
                <div className="count-job">{jobCount}</div>
                <span className="text-count">Số tin tuyển dụng</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-md-12 col-sm-12 content-topa text-center-content">
            <JobListLoading />
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy.data,
    information: state.informationCompany.data,
    // information: state.information,
    status: state.dataView
  };
};
export default connect(mapStateToProps)(CompanyDetail);
