import React from "react";
import TopCompany from "../TopCompany";
import NewsLetter from "../NewsLetter";
import HomeAds1 from "../HomeAds1";
import { object } from "prop-types";
import SiteBackLink from "../SiteBackLink";
import SideBarCarrerHome from "../SideBarCarrerHome";
import config from "../../configs/appConfig";
import AdSense from "react-adsense";

export default class HomeSideBar extends React.Component {
  static contextTypes = {
    i18n: object
  };
  render() {
    const { l } = this.context.i18n;
    return (
      <div className="col-md-3">
        <div className="row">
          <div className="col-md-12 col-sm-6">
            <AdSense.Google
              client={config.adSenseClientId}
              slot={config.adSenseSlotId}
            />
          </div>

          <SideBarCarrerHome />
          {/* <TopCompany /> */}
          {/* <NewsLetter /> */}
          <SiteBackLink />
        </div>
      </div>
    );
  }
}
