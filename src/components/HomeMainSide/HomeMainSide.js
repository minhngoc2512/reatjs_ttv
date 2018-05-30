import React from "react";
import { object } from "prop-types";
import JobTabFilter from "../JobTabFilter";
import JobList from "../JobList";
import Image from "./../Image";
import JobListLoading from "../JobListLoading";
import { connect } from "react-redux";
import PaginateCategory from "../PaginateCategory";
import JobTabContent from "../JobTabContent";
import config from "../../configs/appConfig";
import AdSense from "react-adsense";

export class HomeMainSide extends React.Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { store } = context.store;
  }

  render() {
    const { l } = this.context.i18n;
    const type = "KCN";

    return (
      <div className="col-md-9">
        <div className="jobs-tab-panel">
          <JobTabFilter />
          <div className="tab-content">
            <div
              role="tabpanel"
              className="tab-pane active"
              id="joblistfeature"
            >
              {/* <JobTabContent
                joblistfeature={this.props.joblistfeature}
                type="pageHot"
                page={this.props.page.pageHot}
                updatePage={this.props.updatePage}
                dataView={this.props.dataView.JOBLIST}
              /> */}
              <JobList joblist={this.props.joblistfeature.data} />
              <PaginateCategory
                type="pageHot"
                page={this.props.page.pageHot}
                updatePage={this.props.updatePage}
                pagination={this.props.joblistfeature.pagination}
              />
            </div>
            <div role="tabpanel" className="tab-pane" id="joblistnew">
              <JobList joblist={this.props.joblistnew.data} />
              <PaginateCategory
                type="pageNew"
                page={this.props.page.pageNew}
                updatePage={this.props.updatePage}
                pagination={this.props.joblistnew.pagination}
              />
            </div>
            <div role="tabpanel" className="tab-pane " id="topindustrialzone">
              <JobList
                type={type}
                joblist={this.props.topindustrialzone.data}
              />
              <PaginateCategory
                type="pageIndus"
                page={this.props.page.pageIndus}
                updatePage={this.props.updatePage}
                pagination={this.props.topindustrialzone.pagination}
              />
            </div>
          </div>
        </div>
        <AdSense.Google
          client={config.adSenseClientId}
          slot={config.adSenseSlotId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    joblistfeature: state.joblistfeature.data,
    joblistnew: state.joblistnew.data,
    topindustrialzone: state.topindustrialzone.data
  };
};
export default connect(mapStateToProps)(HomeMainSide);
