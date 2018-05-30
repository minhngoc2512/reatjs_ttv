import React from "react";
import { object } from "prop-types";
import HomeMainSide from "../HomeMainSide";
import HomeSideBar from "../HomeSideBar";

export default class HomeIndex extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <section>
        <div className="container">
          <div className="row">
            <HomeMainSide
              page={this.props.page}
              updatePage={this.props.updatePage}
            />
            <HomeSideBar />
          </div>
        </div>
      </section>
    );
  }
}
