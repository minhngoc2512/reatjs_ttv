import { Component } from "react";
import { object } from "prop-types";
import CompanyMain from "../CompanyMain";
import CompanySideBar from "../CompanySideBar";
import { connect } from "react-redux";
import { loadListJobCompany } from "../../redux/modules/company/actions";
class CompanyIndex extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      sort: "-created_at",
      page: 1,
      company_id: props.company_id
    };
    this.updatePage = this.updatePage.bind(this);
    this.updateSort = this.updateSort.bind(this);
  }
  updateSort(sort) {
    this.setState(
      {
        sort: sort
      },
      () => {
        this.context.store.dispatch(
          loadListJobCompany(
            this.state.company_id +
              "&sort=" +
              this.state.sort +
              "&page=" +
              this.state.page
          )
        );
      }
    );
  }
  updatePage(page) {
    this.setState({
      page: page
    });
    this.context.store.dispatch(
      loadListJobCompany(
        this.state.company_id + "&sort=" + this.state.sort + "&page=" + page
      )
    );
  }
  render() {
    const { l } = this.context.i18n;
    return (
      <div className="row">
        <div className="content-company-middle">
          <div className="row">
            <div className="col-md-12">
              <h2 className="border-title-c">
                VIỆC LÀM {this.props.informationCompany.data[0].name}
              </h2>
            </div>
          </div>
          <CompanyMain
            industrialSlug={this.props.industrialSlug}
            provinceSlug={this.props.provinceSlug}
            path={this.props.path}
            updatePage={this.updatePage}
            updateSort={this.updateSort}
            store={this.props.store}
            companybId={this.props.companybId}
            sort={this.state.sort}
            page={this.state.page}
            pagination={this.props.pagination}
          />
          <CompanySideBar />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    informationCompany: state.informationCompany.data
  };
};
export default connect(mapStateToProps)(CompanyIndex);
