import React from "react";
import { object } from "prop-types";
import IndustrialZoneSummary from "../IndustrialZoneSummary";
import IndustrialProvince from "../IndustrialProvince";
import { connect } from "react-redux";
import JobListLoading from "../JobListLoading";

export class TopIndustrialZone extends React.Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);

    const { store } = context.store;
  }

  render() {
    const provinces =
      typeof this.props.provinces !== "undefined"
        ? this.props.provinces.data
        : [];

    // if (
    //   this.props.dataView.TOPINDUSTRIALZONE.isLoaded === true &&
    //   this.props.dataView.TOPINDUSTRIALZONE.isFailed === false
    // ) {
    const industrialzoneProvince = provinces.map((province, index) => {
      return (
        <IndustrialProvince
          taxonomy={this.props.taxonomy.data.data}
          key={index}
          province={province}
        />
      );
    });
    return (
      <section className="browse-jobs">
        <div className="container">
          <IndustrialZoneSummary />
          <div className="classic-list-view row">{industrialzoneProvince}</div>
        </div>
      </section>
    );
    // } else {
    //   return (
    //     <section className="browse-jobs">
    //       <div className="container">
    //         <JobListLoading />
    //       </div>
    //     </section>
    //   );
    // }
  }
}

const mapStateToProps = state => {
  return {
    dataView: state.dataView
  };
};
export default connect(mapStateToProps)(TopIndustrialZone);
